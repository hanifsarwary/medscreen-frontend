import React, { Component } from 'react'

export default class SelectPanel extends Component {
    render() {
        return (
            <div class="col-sm-12 checklist forms-field fade-apply appointment-form-margin lp0 rp0">
                <label> Selected Tests: </label>
                <table class="table">
                <tbody>
                { this.props.selected_options.map((item, i) => {
                    return (
                        <tr key={i}>
                        <td class="text-capitalize font-weight-bold fade-apply">{item.label} 
                            <ul>
                            {
                                item.panel_test.map((test, i) => {
                                return (
                                    <li class="set-ul-margin" key={i}>{test.title} </li>
                                )
                                })
                            }
                            </ul>
                        </td>
                        <td>{item.price_handle.price}</td>
                        <td class="text-capitalize text-align-end"><span onClick={() => this.props.handleremoveItem(item.value)}><i class="icon-cancel"></i></span></td>
                        </tr>
                    )
                    })
                }
                </tbody>
                <tfoot>
                    <tr>
                    <th>{this.props.panelName} Total</th>
                    <th colSpan="2">{countBillValue(this.props.selected_options)}</th>
                    </tr>
                </tfoot>
                </table>
            </div>
        )
    }
}


const countBillValue = (obj) => {
    return obj.reduce( (sum, item) => {
        if(item.price_type === 'RANGE') {
            const count = obj.filter((obj) => obj.price_type === 'RANGE').length;
            return countBillForRangeTypeTest(count, item)
        } else {
           return  sum + item.price_handle.price
        }
    }, 0 )
}

const countBillForRangeTypeTest = (count, item) => {
    
    if (count >= 8 && count <= 14) { 
        return item.price_handle.start_price + item.price_handle.interval_price; 
    }
    else if (count >= 15 && count <= 21) { 
        return item.price_handle.start_price + (item.price_handle.interval_price * 2); 
    }
    else if (count >= 22 && count <= 28) { 
        return item.price_handle.start_price + (item.price_handle.interval_price * 3); 
    }
    else if (count >= 29) { 
        return item.price_handle.start_price + (item.price_handle.interval_price * 4); 
    } else {
        return item.price_handle.start_price; 
    }
}