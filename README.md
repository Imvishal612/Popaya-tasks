# Popaya-tasks
# Bug Fixing Task – Express.js REST API

## Overview

This project is a simple Express.js REST API application containing multiple intentional bugs related to routing, validation, type handling, logical conditions, and API responses.

The task involved identifying and fixing runtime errors and logical issues to ensure all APIs function correctly.

---

# Tech Stack

* Node.js
* Express.js
* JavaScript

---

# Features

* Get all users
* Get user by ID
* Get notes
* Get notes count
* Create notes
* Delete notes
* Update users
* Login API
* Sum API

---

# Fixed Issues

## 1. Incorrect Variable Reference

Fixed undefined variable issue in `/users` route.

## 2. Type Mismatch in Route Params

Converted route parameters from string to number before comparison.

## 3. Missing Return Statement

Added missing return in helper function.

## 4. Typo Error

Fixed `lenght` → `length`.

## 5. Async Handling

Added missing `await` in async route.

## 6. Incorrect Array Comparison

Replaced invalid array comparison with proper length check.

## 7. Function Invocation Issue

Fixed function reference to actual function call.

## 8. Validation Logic

Improved input validation conditions.

## 9. Assignment vs Comparison Operator

Fixed accidental assignment inside filter condition.

## 10. Wrong Logical Operator

Corrected login condition from `||` to `&&`.

## 11. Incorrect Array Method

Replaced `filter()` with `find()` where single object was required.

## 12. Port Logging Mismatch

Corrected server port message.

---

# Installation

Install dependencies:

```bash
npm install
```

---

# Run Server

```bash
node index.js
```

Server runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Get Users

```http
GET /users
```

## Get User By ID

```http
GET /users/:id
```

## Get Notes

```http
GET /notes
```

## Notes Count

```http
GET /notes/count
```

## Create Note

```http
POST /notes
```

## Delete Note

```http
DELETE /notes/:id
```

## Update User

```http
PUT /users/:id
```

## Login

```http
POST /login
```

## Sum API

```http
POST /sum
```

---

# Author

Vishal Jogendra Singh
