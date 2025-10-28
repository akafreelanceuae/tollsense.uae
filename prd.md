Excellent — let’s turn **TollSense UAE** into a full, investor-grade **Product Requirements Document (PRD)** like we did for *DropPin*, but tailored to Dubai/Abu Dhabi’s road toll system and real driver pain points.

---

# 🚗 **TollSense UAE — Product Requirements Document (PRD)**

**Version:** 1.0
**Date:** October 2025
**Author:** [Your Name]
**Product Owner:** [Your Name]
**Status:** MVP Planning

---

## 1. 🎯 Product Overview

### **Product Name:**

**TollSense UAE**

### **Tagline:**

*“Drive smart. Pay less. Never miss a Salik or Darb toll again.”*

### **Vision:**

To be the **AI-powered toll companion** that helps UAE drivers, delivery fleets, and expats monitor, optimize, and reduce toll expenses across **Salik (Dubai)** and **Darb (Abu Dhabi)** systems — all in one unified dashboard.

### **Mission:**

Simplify toll tracking and cost forecasting with automation, alerts, and smart routing — so no one ever gets unexpected charges or fines again.

---

## 2. 💡 Problem Statement

Drivers in the UAE face fragmented toll systems and financial blind spots:

* Separate accounts for **Salik** (Dubai) and **Darb** (Abu Dhabi).
* No unified monthly summary across all vehicles.
* Frequent surprises: **auto top-ups, low balance, or double deductions**.
* Fleet managers lack insight into toll patterns or optimization routes.

**TollSense UAE** bridges this by aggregating data from both systems, offering **real-time toll tracking, AI-driven route savings**, and **predictive expense insights**.

---

## 3. ⚙️ Core MVP Features

| Feature                                    | Description                                                                    | Priority |
| ------------------------------------------ | ------------------------------------------------------------------------------ | -------- |
| **1. Toll Wallet Integration (Read-Only)** | Connect Salik & Darb accounts using secure login tokens or manual CSV uploads. | ⭐️⭐️⭐️   |
| **2. Dashboard Overview**                  | Unified dashboard showing total tolls, recent transactions, balance levels.    | ⭐️⭐️⭐️   |
| **3. Smart Alerts**                        | Notifications for low balance, heavy spending days, or missed deductions.      | ⭐️⭐️⭐️   |
| **4. Route Cost Calculator**               | Estimate toll cost between any two UAE points (Dubai ↔ Abu Dhabi).             | ⭐️⭐️     |
| **5. AI Spending Insights**                | Monthly report on toll usage patterns (peak hours, frequent gates, waste).     | ⭐️⭐️     |
| **6. Multi-Vehicle Tracking**              | Support for multiple car plates under one user.                                | ⭐️⭐️⭐️   |
| **7. Expense Export (CSV / PDF)**          | Export toll history for reimbursement or accounting.                           | ⭐️       |
| **8. TollSense AI Suggestions**            | Suggest alternate toll-free routes or best timing to avoid charges.            | ⭐️       |
| **9. Fleet Manager Mode (Phase 2)**        | Manage 10+ vehicles with analytics per driver/vehicle.                         | ⭐️       |
| **10. Mobile PWA + Push Notifications**    | Installable app with background alerts.                                        | ⭐️⭐️     |

---

## 4. 🧠 User Personas

### 👨‍💼 **Individual Driver – “Hassan the Commuter”**

* Drives daily from Sharjah to Dubai Marina.
* Frustration: toll deductions he never notices until late SMS.
* Goal: see total toll spend per month and receive low-balance alerts.

### 🚘 **Fleet Manager – “Nour Logistics”**

* 25 vehicles across Dubai/Abu Dhabi.
* Frustration: no unified toll visibility; manual log entries.
* Goal: real-time cost control and vehicle-level insights.

### 👩‍🧑‍🏫 **New Resident – “Aisha the Expat”**

* Recently moved to Dubai.
* Frustration: confused between Salik tags, Darb accounts, and recharges.
* Goal: one app explaining everything with predictive toll cost per trip.

---

## 5. 🧩 Key Differentiators

| Problem                             | TollSense Solution                     |
| ----------------------------------- | -------------------------------------- |
| Two separate systems (Salik + Darb) | Unified, auto-synced toll view         |
| No proactive alerts                 | Smart AI notifications                 |
| Manual expense tracking             | Automatic monthly toll reports         |
| High costs from poor routing        | AI route optimizer avoiding toll gates |
| Difficult for fleets                | Centralized fleet dashboard            |

---

## 6. 🧰 Technical Architecture

### **Frontend:**

* **Next.js 15 (App Router)**
* **TailwindCSS + Shadcn UI**
* **Mapbox GL / Google Maps SDK** for toll-gate visualization
* **Recharts** for analytics (spend, frequency, gates)
* **PWA Ready** for mobile alerts

### **Backend:**

* **Supabase (Postgres + Auth + Storage)**
* **Edge Functions for toll parsing & AI summaries**
* **Prisma ORM**
* **Rate-limited CRON jobs** to sync toll data

### **AI Layer:**

* OpenAI GPT-5 model for analyzing toll trends (“You could save AED 75/month by rerouting via Al Khail Rd.”)
* Predictive model using historical data

### **Integrations:**

* **Salik API / Web Scraper (with user consent)**
* **Darb API / CSV import**
* Optional **Google Maps Directions API** for route toll estimation

### **Hosting & DevOps:**

* Vercel frontend
* Supabase backend
* GitHub Actions (CI/CD, tests, deploy previews)

---

## 7. 🔒 Security & Compliance

* OAuth2-based login via Google/Apple.
* AES-encrypted storage for account tokens.
* RLS on Supabase to isolate per-user data.
* GDPR & UAE Data Privacy compliance.
* Read-only integration (no financial operations performed).

---

## 8. 🧮 Data Schema (Simplified)

**`users`**

* id (UUID)
* email
* name
* region (Dubai / Abu Dhabi)
* created_at

**`vehicles`**

* id
* user_id (FK → users)
* plate_number
* nickname
* type (private/fleet)

**`toll_transactions`**

* id
* user_id
* vehicle_id
* source (Salik / Darb)
* gate_name
* emirate
* cost (float)
* timestamp
* trip_direction (e.g., inbound/outbound)

**`alerts`**

* id
* user_id
* message
* type (low_balance / high_spend / insight)
* read (bool)

---

## 9. 📱 Core Screens / UI

| Screen                | Description                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------- |
| **Dashboard**         | Shows current balances (Salik + Darb), total spent this month, and daily insights.           |
| **Transactions List** | Itemized tolls by gate, vehicle, date, and amount.                                           |
| **Map View**          | Visualizes toll gates passed per route.                                                      |
| **AI Insights Tab**   | Tips: “You passed Al Garhoud Gate 12 times this week — try Sheikh Zayed Rd exit 43 to save.” |
| **Settings**          | Manage accounts, vehicles, alerts, export data.                                              |

---

## 10. 📊 Analytics

| Metric                     | Goal                                          |
| -------------------------- | --------------------------------------------- |
| Active Users (MAU)         | 10,000+ in first 3 months                     |
| Avg. Vehicles/User         | 2+                                            |
| Monthly Toll Spend Tracked | AED 1M+ aggregate                             |
| Retention (Month 1→2)      | >45%                                          |
| Top Gates by Traffic       | Data-driven insights for future B2B dashboard |

---

## 11. 🚀 MVP Roadmap

| Phase                                         | Duration                                                                                | Deliverables |
| --------------------------------------------- | --------------------------------------------------------------------------------------- | ------------ |
| **Phase 1 — MVP Core (6 weeks)**              | - User login <br> - Manual toll entry & CSV import <br> - Unified dashboard + analytics |              |
| **Phase 2 — Smart Alerts (3 weeks)**          | - Low balance & overspend notifications <br> - Route cost calculator                    |              |
| **Phase 3 — AI Insights (4 weeks)**           | - Predictive expense report <br> - Toll-avoidance route suggestion                      |              |
| **Phase 4 — Fleet Mode (4 weeks)**            | - Multi-vehicle analytics <br> - Driver-wise spend reports                              |              |
| **Phase 5 — Mobile & Monetization (4 weeks)** | - PWA launch <br> - Subscription tiers                                                  |              |

---

## 12. 💰 Monetization Strategy

| Tier                 | Features                                       | Price          |
| -------------------- | ---------------------------------------------- | -------------- |
| **Free**             | 1 vehicle, manual uploads, dashboard           | AED 0          |
| **Pro**              | Auto-sync + AI insights + export reports       | AED 9.99 / mo  |
| **Fleet**            | 10+ vehicles, team dashboard, analytics export | AED 49.99 / mo |
| **Enterprise (API)** | Integration with logistics ERP                 | Custom         |

---

## 13. 🧩 Example Use Case

1. Hassan logs in → connects Salik and Darb.
2. Dashboard fetches his past 30 days of tolls.
3. TollSense detects he spent **AED 240 this month** and sends alert:
   *“You could save AED 48 if you avoid Al Barsha Gate on weekdays.”*
4. Hassan adjusts route → sees monthly toll decrease by 20%.

---

## 14. 🧭 Competitive Landscape

| Competitor  | Focus          | Weakness                  | TollSense Edge       |
| ----------- | -------------- | ------------------------- | -------------------- |
| Salik App   | Dubai only     | No insights or AI         | Unified + Predictive |
| Darb App    | Abu Dhabi only | Limited analytics         | Multi-city unified   |
| Google Maps | Routing only   | Doesn’t show toll spend   | Real toll tracking   |
| Waze        | Navigation     | No UAE-specific toll data | Local integration    |

---

## 15. 🧠 Future Expansion

* **Fuel Cost + Toll Bundle** — full trip cost estimation.
* **Apple CarPlay / Android Auto widget.**
* **Integration with RTA open data.**
* **Corporate Fleet API** — plug into Careem, Noon, Talabat, etc.
* **AI Budget Advisor** — monthly toll spend predictions and savings plans.

---

## 16. 📈 Success Criteria

✅ Users can connect both toll systems and see all transactions in one place.
✅ System sends timely low-balance or toll-pattern alerts.
✅ 20% of users adopt AI insights to change driving behavior.
✅ Fleet version launched within 6 months.

---

Would you like me to generate next:

* 🧱 **Full Next.js + Supabase + Prisma repo tree** (production-ready architecture)
* 🗺 **ERD diagram + API endpoints**

This will make TollSense fully codable (you can push straight to GitHub or Vercel).
