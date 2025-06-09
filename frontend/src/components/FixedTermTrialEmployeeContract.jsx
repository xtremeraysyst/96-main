import React from 'react';
import HrField from "./HRField.jsx";
import SignaturePad from "./SignaturePad.jsx";

const FixedTermEmployeeContract = ({
                                       initials,
                                       lastName,
                                       address,
                                       addressNr,
                                       cityName,
                                       dateOfBirth,
                                       startDate,
                                       endDate,
                                       functionTitle,
                                       salaryAmount,
                                       numberOfHoursPerWeek,
                                       numberOfHolidayDays,
                                       dateSigned,
                                       handleChange,
                                       activities,
                                       contractDuration
                            }) => {
    return (
        <div className="prose mx-auto p-6 max-w-4xl lg:max-w-none text-justify bg-white">
            <h1 className="text-center font-bold text-xl mb-4">FIXED-TERM EMPLOYEE CONTRACT</h1>

            <p><strong>Undersigned:</strong></p>
            <p>
                El Niño BV, established at Kuipersdijk nr 6C in Enschede, hereinafter referred to as “employer”,
                legally represented in this matter by Mr. M.A. Groeneveld in his position as director.
            </p>

            <p><strong>And</strong></p>
            <p>
                Mr / Ms {initials} {lastName}, residing at {address} nr {addressNr} at {cityName}, born on {dateOfBirth},
                hereinafter referred to as “employee”,
            </p>

            <p>have agreed to the following:</p>

            <h2 className={"font-bold"}>Article 1. Commencement of employment, position and nature of work </h2>
            <p>
                Effective from <HrField value={startDate} handleChange={handleChange} id={"startDate"} type={"date"}/>,
                the employee enters the employment of the employer in the position
                of <HrField value={functionTitle} handleChange={handleChange} id={"functionTitle"}/>.
            </p>
            <p>
                The activities associated with this position consist of performing <HrField value={activities}
                                                                                            handleChange={handleChange}
                                                                                            id={"activities"}/>
                activities and all other activities that can reasonably be expected of the employee.
            </p>

            <h2 className={"font-bold"}>Article 2. Duration</h2>
            <p>
                This employment contract has been entered into for a period of <HrField value={contractDuration}
                                                                                        handleChange={handleChange}
                                                                                        id={"contractDuration"}/> months
                and therefore in any case ends
                by operation of law on <HrField value={endDate} handleChange={handleChange} id={"endDate"}
                                                type={"date"}/>. The employment contract can be terminated prematurely
                by mutual
                agreement
                with due observance of the statutory notice periods (4 weeks).
            </p>
            <p>
                This employment contract can be dissolved at the end of the contract, through mutual consent, at end of
                the
                trial period, by termination, due to bankruptcy of the employer, due to financial need of the employer,
                by immediate dismissal and/or dissolution by court.
            </p>

            <h2 className={"font-bold"}>Article 3. Trial period</h2>
            <p>
                This employment contract has been entered into with due observance of a mutual trial period of one
                month.
                During this trial period, both parties can terminate the employment contract with immediate effect. At
                the end
                of the trial period, an evaluation interview is scheduled to discuss progress. If desired the employer,
                at
                the request of the employee, will explain the reasons for termination during the trial period in
                writing.
            </p>

            <h2 className={"font-bold"}>Article 4. Salary</h2>
            <p>
                Starting <HrField value={startDate} handleChange={handleChange} id={"startDate"} type={"date"}/> the
                employee will receive a salary of €<HrField value={salaryAmount} handleChange={handleChange}
                                                            id={"salaryAmount"}/>,- gross per month for a
                working
                week of <HrField value={numberOfHoursPerWeek} handleChange={handleChange}
                                 id={"numberOfHoursPerWeek"}/> hours, to be paid by the employer before or on the last
                day of the month.
            </p>

            <h2 className={"font-bold"}>Article 5. Incapacity for work</h2>
            <ol className={"list-decimal ml-10 py-2"}>
                <li>
                    In the event of incapacity for work due to illness, accident, etc., if and as long as the employment
                    continues during that period, the employer will continue to pay 100% of the gross salary during the
                    first 52 weeks of incapacity for work.
                </li>
                <li>
                    In the event of incapacity for work due to illness, accident, etc., if and as long as the employment
                    continues during that period, the employer will continue to pay 70% of the gross salary during the
                    second 52 weeks of incapacity for work.
                </li>
                <li>
                    In the event of incapacity for work (or illness), the employee is obliged to report this
                    immediately,
                    at least before the start of the working day, to the employer. The employee is obliged to adhere to
                    the absenteeism protocol that applies within the company. A waiting period of 1 day will apply to
                    sick leave.
                    Employees will not receive paid sick leave for the first day of an absence.
                </li>
                <li>
                    No statutory holidays are accrued during illness or incapacity for work.
                    The number of statutory holidays is 20 per year with a 40-hour working week.
                </li>
            </ol>
            <h2 className={"font-bold"}>Article 6. Working hours</h2>
            <p>
                The employer maintains flexible working hours and days. The employee can arrange their schedule
                reasonably,
                considering project planning, deadlines, and urgent requests.
            </p>
            <p>
                If the hour balance is negative, the employer may require extra hours. If it reaches the negative of one
                week's contractual
                hours, the employer may convert this contract into a zero-hour contract until the balance returns to
                zero.
            </p>

            <h2 className={"font-bold"}>Article 7. Vacation and holiday allowance</h2>
            <p>
                The employee is entitled to <HrField value={numberOfHolidayDays} handleChange={handleChange}
                                                     id={"numberOfHolidayDays"}/> holidays per calendar year with
                retention of salary.
                They also receive 8% of their annual gross salary as a holiday allowance, paid monthly.
            </p>
            <p>
                Holiday allowance and entitlement are prorated based on time worked during the year.
            </p>

            <h2 className={"font-bold"}>Article 8. Pension provision</h2>
            <p>
                A pension provision of 8% of annual gross salary is calculated and paid monthly. The employee is
                responsible for securing their pension funds.
            </p>

            <h2 className={"font-bold"}>Article 9. Collective Labour Agreement (CAO)</h2>
            <p>No collective labour agreement applies to this employee agreement.</p>

            <h2 className={"font-bold"}>Article 10. Additional fringe benefits</h2>
            <p>
                The employer provides a Macbook Pro on loan and an annual learning budget of €1500 for approved
                resources.
            </p>

            <h2 className={"font-bold"}>Article 11. Key to the office</h2>
            <p>
                The employee will receive a key to the office. Upon termination, it must be returned within 1 working
                day,
                or a €500/day penalty will apply.
            </p>

            <h2 className={"font-bold"}>Article 12. Receipt of employment contract</h2>
            <p>
                Employee declares to have received a signed copy of this contract.
            </p>

            <p className="mt-6">Agreed and signed in duplicate at <HrField value={cityName} handleChange={handleChange}
                                                                           id={"cityName"}/> on
                <HrField value={dateSigned} handleChange={handleChange} id={"dateSigned"} type={"date"}/>.
            </p>

            <div className="mt-8 flex flex-col lg:flex-row lg:justify-between lg:gap-8">
                <div className="mb-8 lg:mb-0 lg:flex-1">
                    <p>(signature employer)</p>
                    <p>El Niño BV</p>
                    <p>M.A. Groeneveld</p>
                    <p>Director</p>
                    <div className="mt-4">
                        <SignaturePad/>
                    </div>
                </div>
                <div className="lg:flex-1">
                    <p>(signature employee)</p>
                    <p>{initials} {lastName}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className="mt-4">
                        <SignaturePad isOpen={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixedTermEmployeeContract;
