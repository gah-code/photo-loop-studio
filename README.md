# 📸 Internal Management Application - Photo Loop Studio  

**Photo Loop Studio** is a family photography service with five locations across the **South Bay** and **North Bay** areas.  

This internal application is designed to streamline studio operations, providing an all-in-one solution for managing:  

- **Bookings** – Schedule and track photography sessions.  
- **Locations** – Manage studio availability and details.  
- **Clients** – Maintain client records and history.  

### 🔹 Purpose of the Application  

The **Photo Loop Studio Management App** is a **custom-built** tool for studio employees to efficiently handle day-to-day operations. It enables:  

- Easy **client management** and booking tracking.  
- A seamless workflow for handling **studio locations and availability**.  
- Centralized **photo session details** for better organization.  

### 🔹 API Requirements  

To support these features, we need a **custom API** that will:  

- Handle **user authentication** (studio staff only).  
- Manage **bookings, locations, and client data**.  
- Provide **secure access to photo galleries** for clients.  
- Track **payments and invoicing**.  

---

### **Feature-Based State Categories**

- **Bookings Feature** → Requires a `bookings` state
- **Locations Feature** → Requires a `locations` state
- **Clients Feature** → Requires a `clients` state
- **Dashboard Feature** → Powered by `bookings` data
- **Check-in & Check-out Features** → Powered by `bookings` data
- **Application Settings** → Requires an `app_settings` state
- **Authentication** → Requires a `users` state

All of these states will be stored in Supabase as database tables and managed on the front end using **React Query**.

---
