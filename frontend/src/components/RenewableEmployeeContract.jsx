import React from 'react';
import HrField from "./HRField.jsx";
import SignaturePad from "./SignaturePad.jsx";

const RenewableEmployeeContract = ({
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
        <div className="prose mx-auto p-6 max-w-4xl text-justify bg-white">
            <h1 className="text-center font-bold text-xl mb-4">RENEWABLE EMPLOYEE CONTRACT</h1>

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
                Effective from <HrField value={startDate} handleChange={handleChange} id={"startDate"} type={"date"}/>, the employee's employment contract is renewed in the position as a
                <HrField value={functionTitle} handleChange={handleChange} id={"functionTitle"}/>.
            </p>
            <p>
                The activities associated with this position consist of performing <HrField value={activities} handleChange={handleChange} id={"activities"}/>
                activities and all other activities that can reasonably be expected of the employee.
            </p>

            <h2 className={"font-bold"}>Article 2. Duration</h2>
            <p>
                This employment contract has been entered into for a period of <HrField value={contractDuration} handleChange={handleChange} id={"contractDuration"}/> months and therefore in any case
                ends by operation of law on the <HrField value={endDate} handleChange={handleChange} id={"endDate"} type={"date"}/>. The employment contract can be terminated prematurely by mutual
                agreement with due observance of the statutory notice periods (4 weeks).
            </p>
            <p>
                This employment contract can be dissolved at the end of the contract, through mutual consent, by termination,
                due to bankruptcy of the employer, due to financial need of the employer, by immediate dismissal and / or dissolution by court.
            </p>

            <h2 className={"font-bold"}>Article 3. Trial period</h2>
            <p>
                For this employment contract no trial period is required.
            </p>

            <h2 className={"font-bold"}>Article 4. Salary</h2>
            <p>
                Starting <HrField value={startDate} handleChange={handleChange} id={"startDate"} type={"date"}/> the employee will receive a salary of €<HrField value={salaryAmount} handleChange={handleChange} id={"salaryAmount"}/>,- gross per month for a
                working
                week of <HrField value={numberOfHoursPerWeek} handleChange={handleChange} id={"numberOfHoursPerWeek"}/> hours, to be paid by the employer before or on the last day of the month.
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
                    In the event of incapacity for work (or illness), the employee is obliged to report this immediately,
                    at least before the start of the working day, to the employer. The employee is obliged to adhere to
                    the absenteeism protocol that applies within the company. A waiting period of 1 day will apply to sick leave.
                    Employees will not receive paid sick leave for the first day of an absence.
                </li>
                <li>
                    No statutory holidays are accrued during illness or incapacity for work.
                    The number of statutory holidays is 20 per year with a 40-hour working week.
                </li>
            </ol>
            <h2 className={"font-bold"}>Article 6. Working hours</h2>
            <p>
                The employer maintains flexible working hours and working days. As a result, the employee is free to arrange
                their working hours themselves, within reasonable limits. They consider the planning for current projects,
                deadlines and any other agreements or urgent requests.
            </p>
            <p>
                When employee's hour balance reaches a negative, employer will give a formal notification that extra hours have to be
                worked to compensate for the negative balance. If the hour balance reaches negative one time the weekly contractual
                hours, then employer has the right to convert this employee contract into a zero-hour contract until the hour balance of
                employee reaches 0 (zero) hours.
            </p>

            <h2 className={"font-bold"}>Article 7. Vacation and holiday allowance</h2>
            <p>
                The employee is entitled to <HrField value={numberOfHolidayDays} handleChange={handleChange} id={"numberOfHolidayDays"}/> holidays per calendar year with retention of salary.
            </p>
            <p>
                Every year, the employee is entitled to a holiday allowance of 8% on the annual gross salary. This holiday allowance is paid every month.
            </p>

            <h2 className={"font-bold"}>Article 8. Pension provision</h2>
            <p>
                A pension provision is made for the employee. The pension provision amounts to 8% of the annual gross salary
                calculated and is paid every month. The employee is responsible for securing his pension funds.
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
                The employer has already provided the employee with a key to the office. When terminating
                the agreement, the employee is obliged to return the key within 1 working day.
                If this is not complied with, there is a penalty of € 500 per day that the key is returned late.
            </p>

            <h2 className={"font-bold"}>Article 12. Receipt of employment contract</h2>
            <p>
                Employee declares to have received a signed copy of this contract.
            </p>

            <p className="mt-6">Agreed and signed in duplicate at <HrField value={cityName} handleChange={handleChange} id={"cityName"}/>
                on <HrField value={dateSigned} handleChange={handleChange} id={"dateSigned"} type={"date"}/>.
            </p>

            <div className="flex justify-between mt-8">
                <div>
                    <p>(signature employer)</p>
                    <p>El Niño BV</p>
                    <p>M.A. Groeneveld</p>
                    <p>Director</p>
                    <SignaturePad/>
                </div>
                <div>
                </div>
                <div>
                    <p>(signature employee)</p>
                    <p>{initials} {lastName}</p>
                    <div className={"mt-13"}>
                        <SignaturePad isOpen={false}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RenewableEmployeeContract;