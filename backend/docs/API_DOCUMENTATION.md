# 📚 API Reference Documentation — dummy-mern-backend
> Automatically generated and maintained by **DevAgents Documentation Agent**

**Project Target:** `C:\Users\Vansh\Downloads\DevAgents\dummy_apps\mern-app\backend`  
**Generated At:** `2026-11-21T06:05:08.259Z`  
**API Specification:** [OpenAPI 3.0 (JSON)](file:///C:/Users/Vansh/Downloads/DevAgents/dummy_apps/mern-app/backend/docs/openapi.json)

---

## 🌐 Base URLs
| Environment | Target URL | Description |
| :--- | :--- | :--- |
| **Local Dev** | `http://localhost:${PORT:-3001}` | Local Node.js / Express development server |
| **Render (Production)** | `https://dummy-data-jecb.onrender.com` | Production containerized cloud API service |
| **Vercel (Frontend)** | `https://frontend-ten-eta-g9xh8fuytw.vercel.app` | Production Edge client SPA |

---

## 🔒 Authentication & Security
Protected endpoints require a JSON Web Token (JWT) sent via the HTTP `Authorization` header:

```http
Authorization: Bearer <your-jwt-token>
```

---

## 📡 Endpoints Summary (3 Endpoints Detected)
| Method | Endpoint Path | Auth Required | Source File | Framework |
| :---: | :--- | :---: | :--- | :---: |
| 🟢 `GET` | `/` | 🔓 Public | `server.js` | Express |
| 🟢 `GET` | `/api/health` | 🔓 Public | `server.js` | Express |
| 🟢 `GET` | `/api/users` | 🔓 Public | `server.js` | Express |

---

## 📋 Detailed Endpoint Specifications

### `GET /`
- **Source Code Location:** `server.js`
- **Security:** 🔓 Public Endpoint

**Example Request (`curl`):**
```bash
curl -X GET "http://localhost:3001/"
```

### `GET /api/health`
- **Source Code Location:** `server.js`
- **Security:** 🔓 Public Endpoint

**Example Request (`curl`):**
```bash
curl -X GET "http://localhost:3001/api/health"
```

### `GET /api/users`
- **Source Code Location:** `server.js`
- **Security:** 🔓 Public Endpoint

**Example Request (`curl`):**
```bash
curl -X GET "http://localhost:3001/api/users"
```
