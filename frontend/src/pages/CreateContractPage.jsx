import React from 'react';
import { useNavigate } from 'react-router';
import BackToMainButton from '../components/BackToMainButton';
import ContractTypeSelect from "../components/ContractTypeSelect.jsx";
import RenewableEmployeeContract from "../components/RenewableEmployeeContract.jsx";
import {useState} from "react";
import FixedTermTrialEmployeeContract from "../components/FixedTermTrialEmployeeContract.jsx";
import IndefiniteEmployeeContract from "../components/IndefiniteEmployeeContract.jsx";
import ElninoLogo from "../assets/elnino-logo.jsx";
import ContractPreviewPanel from "../components/ContractPreviewPanel.jsx";

function CreateContractPage() {
    const [contractType,setContractType] = useState("Renewable");
    const [contract, setContract] = useState({
        employeeName:"Jane Doe",
        initials:"J.",
        lastName:"Doe",
        address:"Main Street",
        addressNr:"123",
        cityName:"Enschede",
        dateOfBirth:"1990-05-15",
        startDate:"2025-06-01",
        endDate:"2025-12-31",
        functionTitle:"Software Developer",
        salaryAmount:"3500",
        numberOfHoursPerWeek:"40",
        numberOfHolidayDays:"25",
        dateSigned:"2025-05-27",
        activities:"Front end",
        contractDuration:6
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedContract = {
            ...contract,
            [name]: value
        };
        if (name === "startDate" || name === "endDate") {
            const startDate = new Date(
                name === "startDate" ? value : contract.startDate
            );
            const endDate = new Date(
                name === "endDate" ? value : contract.endDate
            );

            let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
            months += endDate.getMonth() - startDate.getMonth();
            months = months < 0 ? 0 : months;
            updatedContract.contractDuration = months;
        }
        setContract(updatedContract);
    };

    let contractComponent;

    switch (contractType) {
        case "Renewable":
            contractComponent = <RenewableEmployeeContract
                {...contract}
                handleChange={handleChange}
            />;
            break;
        case "Indefinite":
            contractComponent = <IndefiniteEmployeeContract
                {...contract}
                handleChange={handleChange}
            />
            break;
        default:
            contractComponent = <FixedTermTrialEmployeeContract
                {...contract}
                handleChange={handleChange}
            />;
    }
    
    return (
        <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
            <BackToMainButton />
            
            <div className="bg-gray-200 w-full rounded-lg p-6 lg:p-12">
                <div className="mb-8">
                    <div className="text-5xl">
                        <ElninoLogo/>
                    </div>
                </div>
                
                <div className="mb-8">
                    <ContractTypeSelect onChange={(contract) => setContractType(contract)}/>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:gap-8">
                    <div className="flex-1 order-2 lg:order-1">
                        {contractComponent}
                    </div>
                    
                    <div className="mb-8 lg:mb-0 order-1 lg:order-2 lg:w-80 lg:flex-shrink-0">
                        <ContractPreviewPanel contract={contract} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateContractPage;