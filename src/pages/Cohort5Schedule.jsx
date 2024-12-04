import React from "react";


// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort5Calendar from "../components/CalendarV2/Cohort5Calendar";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort5Schedule() {
    return (
        <div id="Cohort5Schedule">
            <Navbar />
            <Header />
            <GreenArticle >
                <h1>Test Schedule</h1>
            </GreenArticle >
            <Cohort5Calendar />

            {/* not used */}
            <TestComponent />
            
            <HorizontalCohortSelector />
            < Footer />
        </div >


    )


}