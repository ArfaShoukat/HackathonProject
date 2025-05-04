

# 🩸 Blood Donation Web App

A modern, responsive web application built with **React** and **Supabase** that connects blood donors with people in need. Built for the **ReactJS Hackathon 2025**, this project aims to make life-saving blood donation faster, easier, and more accessible, aligned with **UN SDG 3 – Good Health and Well-being**.

## 🌟 Features

* 🔍 **Find Blood Donors** – Search and view a list of available donors.
* ❤️ **Register as a Donor** – Easily sign up and offer to donate blood.
* 🆘 **Request Blood** – Submit urgent requests and match with donors.
* 📋 **View Requests** – See your blood request history in one place.
* 📱 **Mobile Responsive** – Fully functional on all device sizes.
* ✨ **Modern UI** – Clean, user-friendly interface with icons and form validations.

---

## 🚀 Technologies Used

* **ReactJS** – Frontend framework
* **Supabase** – Backend (Database + Auth)
* **Tailwind CSS** – Styling and layout
* **Lucide Icons** – For iconography
* **Framer Motion** – Animations (optional)
* **Vite** – Fast React development environment

---

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blood-donation-app.git
cd blood-donation-app
```

### 2. Install Dependencies

Make sure you have **Node.js** installed (v16+ recommended).

```bash
npm install
```

### 3. Configure Supabase

1. Create a project on [Supabase](https://supabase.com/).
2. Go to `https://app.supabase.com/project/{your_project}/api` and copy:

   * **Project URL**
   * **Anon Public Key**
3. Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. Set up the following Supabase tables:

#### `donors` table

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| name        | Text      |
| blood\_type | Text      |
| phone       | Text      |
| location    | Text      |
| created\_at | Timestamp |

#### `blood_requests` table

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| name        | Text      |
| blood\_type | Text      |
| phone       | Text      |
| location    | Text      |
| reason      | Text      |
| created\_at | Timestamp |

---

## ▶️ Running the App

```bash
npm run dev
```

Open your browser and go to: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
blood-donation-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── DonateBlood.js
│   │   ├── NeedBlood.js
│   │   ├── ViewRequests.js
│   ├── App.js
│   ├── main.jsx
│   └── supabaseClient.js
├── .env
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 📌 Contribution Guidelines

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌍 SDG Impact

> “To ensure healthy lives and promote well-being for all at all ages.”

This app supports **UN Sustainable Development Goal 3** by facilitating blood donation and ensuring timely access to life-saving blood during emergencies.

---
