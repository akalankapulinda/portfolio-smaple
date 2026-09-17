```{=html}
<!-- ===================== HERO BANNER ===================== -->
```
::: {align="center"}
`<img src="https://capsule-render.vercel.app/api?type=waving&color=0:050505,50:161616,100:00F5D4&height=220&section=header&text=Personal%20Portfolio%20Website&fontSize=42&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Code%20%7C%20Create%20%7C%20Impact&descAlignY=60&descSize=18" alt="Personal Portfolio Website Banner"/>`{=html}

`<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=900&color=00F5D4&center=true&vCenter=true&width=650&lines=Minimalist+Design+%7C+Modern+Experience;Interactive+Project+Timeline;Secure+Node.js+Contact+Backend;Built+with+HTML%2C+CSS%2C+JavaScript+%26+Express" alt="Animated typing text"/>`{=html}

```{=html}
<p>
```
`<img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JavaScript-00F5D4?style=for-the-badge&logo=html5&logoColor=050505" alt="Frontend"/>`{=html}
`<img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-111111?style=for-the-badge&logo=node.js&logoColor=00F5D4" alt="Backend"/>`{=html}
`<img src="https://img.shields.io/badge/Email-Mailjet-8B5CF6?style=for-the-badge&logo=maildotru&logoColor=FFFFFF" alt="Mailjet"/>`{=html}
```{=html}
</p>
```
```{=html}
<p>
```
A modern, responsive personal portfolio website with a minimalist
interface, interactive project timeline, and secure contact form powered
by an Express.js backend.
```{=html}
</p>
```
```{=html}
<p>
```
`<a href="#-features">`{=html}Features`</a>`{=html} •
`<a href="#-tech-stack">`{=html}Tech Stack`</a>`{=html} •
`<a href="#-local-setup--installation">`{=html}Installation`</a>`{=html}
• `<a href="#-security">`{=html}Security`</a>`{=html}
```{=html}
</p>
```
:::

------------------------------------------------------------------------

## 🖼️ Preview

> Replace the image path below with your own screenshot after adding it
> to the repository.

::: {align="center"}
`<img src="assets/portfolio-preview.png" alt="Portfolio Website Preview" width="950"/>`{=html}
:::

------------------------------------------------------------------------

## ✨ Features

```{=html}
<table>
```
```{=html}
<tr>
```
```{=html}
<td width="50%">
```
### 🎨 Modern UI/UX

-   Strict `100vh` hero layout

-   CSS Flexbox-based structure

-   Minimalist, app-like visual experience

-   Responsive design principles

    ```{=html}
    </td>
    ```
    ```{=html}
    <td width="50%">
    ```

### 🧭 Interactive Project Timeline

-   Central timeline-driven layout

-   Glassmorphism project cards

-   Smooth hover transitions

-   Scaling animations and background blur

    ```{=html}
    </td>
    ```
    ```{=html}
    </tr>
    ```
    ```{=html}
    <tr>
    ```
    ```{=html}
    <td width="50%">
    ```

### 📩 Functional Contact Form

-   Asynchronous `fetch()` submission

-   Real-time button state updates

-   Frontend and backend separation

-   Email delivery through Mailjet API

    ```{=html}
    </td>
    ```
    ```{=html}
    <td width="50%">
    ```

### 🔐 Secure Backend API

-   Helmet security headers

-   IP-based rate limiting

-   Request validation and sanitization

-   CORS origin restrictions

-   Environment-based secret management

    ```{=html}
    </td>
    ```
    ```{=html}
    </tr>
    ```
    ```{=html}
    </table>
    ```

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

```{=html}
<p>
```
`<img src="https://skillicons.dev/icons?i=html,css,js" alt="Frontend technologies"/>`{=html}
```{=html}
</p>
```
  -----------------------------------------------------------------------
  Technology                          Purpose
  ----------------------------------- -----------------------------------
  HTML5                               Semantic page structure

  CSS3                                Flexbox, animations, custom
                                      properties, responsive styling

  Vanilla JavaScript                  DOM interactions and asynchronous
                                      form submission

  Fetch API                           Sends contact form data to the
                                      backend
  -----------------------------------------------------------------------

### Backend

```{=html}
<p>
```
`<img src="https://skillicons.dev/icons?i=nodejs,express" alt="Backend technologies"/>`{=html}
```{=html}
</p>
```
  Technology           Purpose
  -------------------- ------------------------------------
  Node.js              JavaScript runtime
  Express.js           Backend API and routing
  Node-Mailjet         Mailjet API integration
  dotenv               Environment variable management
  cors                 Cross-origin request configuration
  helmet               Secure HTTP headers
  express-rate-limit   API abuse and spam protection
  express-validator    Input validation and sanitization

------------------------------------------------------------------------

## 🧩 Application Architecture

``` text
┌───────────────────────────────┐
│         Frontend              │
│  HTML + CSS + Vanilla JS      │
└───────────────┬───────────────┘
                │ POST /api/contact
                ▼
┌───────────────────────────────┐
│        Express.js API         │
│                               │
│  CORS → Rate Limit → Validate │
│              ↓                │
│           Helmet              │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│         Mailjet API           │
│      Secure Email Routing     │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│      Recipient Email Inbox    │
└───────────────────────────────┘
```

> API route names and validation behavior should match the
> implementation in `server.js`.

------------------------------------------------------------------------

## 📁 Suggested Project Structure

``` text
portfolio-site/
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   └── index.html
│
├── server.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

------------------------------------------------------------------------

## 🚀 Local Setup & Installation

### 1. Prerequisites

Install the following:

-   [Node.js](https://nodejs.org/) --- version 18 or higher recommended
-   A [Mailjet](https://www.mailjet.com/) account
-   A verified sender email address in Mailjet
-   Git and a code editor such as [Visual Studio
    Code](https://code.visualstudio.com/)

Check your Node.js and npm versions:

``` bash
node --version
npm --version
```

------------------------------------------------------------------------

### 2. Clone the Repository

Replace the placeholder URL with your actual GitHub repository URL.

``` bash
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site
```

------------------------------------------------------------------------

### 3. Install Dependencies

``` bash
npm install
```

------------------------------------------------------------------------

### 4. Configure Environment Variables

Create a `.env` file in the project root:

``` env
MJ_APIKEY_PUBLIC=your_public_key_here
MJ_APIKEY_PRIVATE=your_private_key_here
SENDER_EMAIL=your_verified_mailjet_email@example.com
RECIPIENT_EMAIL=where_you_want_to_receive_messages@example.com
PORT=3000
```

Create a `.env.example` file for sharing configuration requirements
without exposing secrets:

``` env
MJ_APIKEY_PUBLIC=
MJ_APIKEY_PRIVATE=
SENDER_EMAIL=
RECIPIENT_EMAIL=
PORT=3000
```

**Never commit your real `.env` file or API credentials to GitHub.**

------------------------------------------------------------------------

### 5. Run the Application

Start the Express server:

``` bash
node server.js
```

Expected terminal output:

``` text
Secure server running on http://localhost:3000
```

Your exact output depends on the message configured in `server.js`.

------------------------------------------------------------------------

### 6. Launch the Frontend

You can launch the frontend using:

-   VS Code Live Server
-   Another local static development server
-   A frontend route served by your Node.js application, if configured

> Keep the backend server running while testing the contact form. Make
> sure the frontend API URL matches the backend address and route.

------------------------------------------------------------------------

## 📩 Contact Form Request Flow

``` text
Visitor enters:
  ├── Name
  ├── Email
  ├── Subject
  └── Message
          │
          ▼
Frontend validates required fields
          │
          ▼
JavaScript sends POST request
          │
          ▼
Express validates and sanitizes input
          │
          ▼
Rate limit and CORS rules are checked
          │
          ▼
Mailjet sends the email
          │
          ▼
Frontend displays success or error state
```

------------------------------------------------------------------------

## 🔒 Security

The backend includes several security-focused controls:

-   **Helmet:** Adds security-related HTTP headers.
-   **Rate limiting:** Helps reduce repeated requests and spam.
-   **Input validation:** Checks incoming data before processing.
-   **Input sanitization:** Helps remove or normalize unsafe input.
-   **CORS:** Allows requests only from configured trusted origins.
-   **Environment variables:** Keeps Mailjet credentials outside the
    frontend code.

### Production Checklist

Before deployment:

-   [ ] Replace local origins with the real frontend domain.
-   [ ] Never expose Mailjet private credentials in frontend files.
-   [ ] Use HTTPS in production.
-   [ ] Configure secure environment variables in the hosting provider.
-   [ ] Confirm the Mailjet sender email is verified.
-   [ ] Test validation, rate limiting, and error handling.
-   [ ] Avoid returning sensitive server details in API errors.
-   [ ] Review logs and remove unnecessary debug output.

------------------------------------------------------------------------

## ☁️ Deployment

The backend can be deployed to a Node.js-compatible hosting platform,
such as:

-   [Render](https://render.com/)
-   [Railway](https://railway.app/)
-   [Heroku](https://www.heroku.com/)

A typical deployment process:

``` text
Push code to GitHub
        │
        ▼
Connect repository to hosting provider
        │
        ▼
Configure environment variables
        │
        ▼
Set build command: npm install
        │
        ▼
Set start command: node server.js
        │
        ▼
Update frontend API URL
        │
        ▼
Restrict CORS to the live frontend domain
```

> Confirm your hosting provider's supported Node.js version, port
> configuration, and deployment commands before going live.

------------------------------------------------------------------------

## 🧪 Testing Checklist

-   [ ] Homepage loads correctly.
-   [ ] Navigation links work.
-   [ ] Project timeline displays correctly.
-   [ ] Project cards respond to hover interactions.
-   [ ] Contact form validates required fields.
-   [ ] Valid form submissions reach the backend.
-   [ ] Invalid requests are rejected.
-   [ ] Rate limiting behaves as expected.
-   [ ] Mailjet successfully delivers test emails.
-   [ ] CORS blocks unauthorized origins.
-   [ ] Mobile layout remains usable.

------------------------------------------------------------------------

## 🌱 Future Improvements

-   [ ] Add automated tests for API endpoints.
-   [ ] Add a database for contact inquiries.
-   [ ] Add an admin dashboard for messages.
-   [ ] Add CAPTCHA or another anti-spam layer.
-   [ ] Add automated deployment with GitHub Actions.
-   [ ] Add project filtering by technology.
-   [ ] Add accessibility improvements and keyboard navigation.
-   [ ] Add analytics with privacy-conscious configuration.

------------------------------------------------------------------------

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1.  Fork the repository.
2.  Create a feature branch.
3.  Commit your changes.
4.  Push the branch.
5.  Open a pull request.

``` bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

------------------------------------------------------------------------

## 📄 License

Add your preferred license here, such as MIT, if you intend to
distribute the project under that license.

------------------------------------------------------------------------

::: {align="center"}
`<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00F5D4,50:161616,100:050505&height=130&section=footer" alt="Footer banner"/>`{=html}

`<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&duration=3000&pause=1000&color=00F5D4&center=true&vCenter=true&width=500&lines=Build+with+purpose.;Create+with+precision.;Keep+learning.;Happy+coding!" alt="Animated footer text"/>`{=html}

`<br/>`{=html}

**Built with passion for design, development, and continuous learning.**
:::
