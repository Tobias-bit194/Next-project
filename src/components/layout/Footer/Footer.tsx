
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import { CircleCheck } from "lucide-react";

const footerSections = [
    {
        title: "Company Info",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Our Products", href: "/products" },
            { label: "Brands", href: "/brands" },
            { label: "Contact Us", href: "/contact" },
        ],
    },
    {
        title: "Customer Support",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "Help Center (FAQs)", href: "/faq" },
            { label: "Track My Order", href: "/orders" },
            { label: "Return & Refund Policy", href: "/returns" },
            { label: "Shipping Information", href: "/shipping" },
        ],
    },
    {
        title: "Explore",
        links: [
            { label: "Categories", href: "/categories" },
            { label: "Best Sellers", href: "/products?sort=best-selling" },
            { label: "New Arrivals", href: "/products?sort=newest" },
            { label: "Deals & Promotions", href: "/deals" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Return & Refund Policy", href: "/returns" },
        ],
    },
];

const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) return;

        // TODO: Connect newsletter API
        // Do not show success until the backend confirms subscription.
        setSubscribed(false);
    };

    return (
        <footer className="w-full bg-[#EAF8E9] text-[#1D2939]">
            <div className="mx-auto max-w-[1440px] px-5 pt-12 lg:px-12">

                {/* Main footer */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5">

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold">
                            {footerSections[0].title}
                        </h3>

                        <ul className="space-y-3">
                            {footerSections[0].links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[11px] text-[#344054] transition hover:text-[#43AE75]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold">
                            {footerSections[1].title}
                        </h3>

                        <ul className="space-y-3">
                            {footerSections[1].links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[11px] text-[#344054] transition hover:text-[#43AE75]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="col-span-2 flex items-start justify-center pt-6 md:col-span-1">
                        <Link href="/" aria-label="Bizda home">
                            <Image
                                src="/images/bizdaLogoFull.png"
                                alt="Bizda"
                                width={170}
                                height={65}
                                className="h-auto w-[160px] object-contain"
                            />
                        </Link>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold">
                            {footerSections[2].title}
                        </h3>

                        <ul className="space-y-3">
                            {footerSections[2].links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[11px] text-[#344054] transition hover:text-[#43AE75]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold">
                            {footerSections[3].title}
                        </h3>

                        <ul className="space-y-3">
                            {footerSections[3].links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[11px] text-[#344054] transition hover:text-[#43AE75]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Social media */}
                        <div className="mt-8">
                            <p className="mb-2 text-xs font-medium">
                                Connect with us
                            </p>

                            <div className="flex items-center gap-3">
                                <span
                                    title="Facebook"
                                    className="text-[#1877F2]"
                                >
                                    <FaFacebookF size={18} />
                                </span>

                                <span
                                    title="Instagram"
                                    className="text-[#E4405F]"
                                >
                                    <FaInstagram size={18} />
                                </span>

                                <span
                                    title="LinkedIn"
                                    className="text-[#0A66C2]"
                                >
                                   <FaLinkedinIn size={18} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-10 flex flex-col items-center">
                    <p className="mb-2 text-xs font-medium text-[#43AE75]">
                        Newsletter Signup
                    </p>

                    <form
                        onSubmit={handleSubscribe}
                        className="flex w-full max-w-[360px] items-center rounded-full bg-[#C6EBC0] p-1"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setSubscribed(false);
                            }}
                            placeholder="Enter your email address"
                            required
                            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-xs text-[#344054] outline-none placeholder:text-[#667085]"
                        />

                        <button
                            type="submit"
                            className="shrink-0 cursor-pointer rounded-full bg-white px-5 py-2 text-xs font-medium text-[#1D2939] transition hover:bg-[#F5F7F9]"
                        >
                            Subscribe
                        </button>
                    </form>

                    {subscribed && (
                        <p className="mt-2 flex items-center gap-1 text-xs text-[#43AE75]">
                          <CircleCheck size={18} />
                            Successfully subscribed!
                        </p>
                    )}
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#CDE5CB] py-4 text-[11px] text-[#667085] sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} Bizda. All rights reserved.
                    </p>

                    <p>
                        Your trusted electronics store
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
