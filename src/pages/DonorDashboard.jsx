import React, { useEffect, useState } from 'react';
import { supabase } from '../config/Supabase';
import {
    PieChart, Pie, Cell,
    BarChart, Bar, XAxis, YAxis, Tooltip,
    ResponsiveContainer
} from 'recharts';
import { FaPhone, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollTop';


const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00C49F', '#FFBB28', '#FF8042'];

const groupBy = (data, key) => {
    const map = new Map();
    for (const item of data) {
        map.set(item[key], (map.get(item[key]) || 0) + 1);
    }
    return Array.from(map, ([name, value]) => ({ name, value }));
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: [0.25, 0.8, 0.25, 1],
        },
    }),
};

const DonorDashboard = () => {
    const [donors, setDonors] = useState([]);

    const fetchDonors = async () => {
        const { data, error } = await supabase.from('donors').select('*');
        if (error) {
            console.error('Error fetching donors:', error.message);
        } else {
            setDonors(data);
            console.log("Donors:", data);
        }
    };

    useEffect(() => {
        fetchDonors();

        const channel = supabase
            .channel('realtime-donors')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'donors' }, () => {
                fetchDonors();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const bloodGroupData = groupBy(donors, 'blood_group');
    const cityData = groupBy(donors, 'city');

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Donor Dashboard</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>

                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h3>Blood Group Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={bloodGroupData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {bloodGroupData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h3>Donors by City</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={cityData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default DonorDashboard;
