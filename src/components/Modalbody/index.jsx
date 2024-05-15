import React from 'react';

class CovidTestingPrices extends React.Component {
    render() {
        return (
            <div style={{paddingTop:'40px'}}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                        <th style={{ textAlign: 'center', backgroundColor: '#F26101',color:'white'}} colSpan={3}>Cash Prices for Covid-19 testing</th>
                        </tr>
                        <tr>
                            <th style={{border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2'}}>Code</th>
                            <th style={{border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2'}}>Description</th>
                            <th style={{border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2'}}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>G2023</td>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>Covid-19 PCR test collection</td>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>$100</td>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>U0003</td>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>Infectious agent detection by nucleic acid</td>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>$200</td>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>U0005</td>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>Infectious agent detection by nucleic acid (DNA or RNA) using high throughput technology</td>
                            <td style={{border: '1px solid #ddd', padding: '8px'}}>$50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CovidTestingPrices;
