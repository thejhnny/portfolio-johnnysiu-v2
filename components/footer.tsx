import React from "react";

function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 text-xs block">
                &copy; 2024 Johnny Siu. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built
                with React & Next.js (App Router & Server Actions), Typescript,
                Tailwind CSS, Framer Motion, React Email and Resend, Vercel
                hosting.
            </p>
        </footer>
    );
}

export default Footer;
