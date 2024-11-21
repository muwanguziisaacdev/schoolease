import localFont from "next/font/local";
import "./globals.css";
// we need to disable the default css for the fontawesome icons

import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { TeacherContextProvider } from "./Contexts/users/TeacherContext";

import GlobalContext from "./Contexts/globalContext";
config.autoAddCss = false;



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "School Management",
  description: "School management system for managing the school finances, students, performance, teachers and tracking every school task and scheduling ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header/>
          <Sidebar/>
            <TeacherContextProvider>
              {children}
            </TeacherContextProvider>



      </body>
    </html>
  );
}
