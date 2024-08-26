import "./fitRate.css"


const BmiFitRates = () => {
    return (
        <section className="mx-auto">
            <table >
                <thead>
                    <tr>
                        <th className="right">BMI</th>
                        <th >Weight Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="right">Below 18.5</td>
                        <td >Underweight</td>
                    </tr>
                    <tr>
                        <td className="right">18.5 - 24.9</td>
                        <td >Healthy</td>
                    </tr>
                    <tr>
                        <td className="right">25.0 - 29.9</td>
                        <td >Overweight</td>
                    </tr>
                    <tr>
                        <td className="right">30.0 and Above</td>
                        <td >Obese</td>
                    </tr>
                </tbody>
            </table>
            <p className="text-gray-400 text-sm mt-5"><span className="text-black font-bold">BMR</span> Metabolic Rate /<span className="text-black font-bold">BMI</span> Body Mass Index</p>
        </section>
    )
}

export default BmiFitRates;
