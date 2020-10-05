import React, { Component } from 'react'

export default class SelectPanel extends Component {
    render() {
        return (
            <div class="col-sm-12 checklist forms-field fade-apply appointment-form-margin">
                <label> Selected Tests: </label>
                <table class="table">
                <tbody>
                { this.props.selected_options.map((item, i) => {
                    return (
                        <tr key={i}>
                        <td class="text-capitalize font-weight-bold fade-apply">{item.label} <b class="pl-4">({item.parent_label})</b>
                            <ul>
                            {
                                item.panel_test.map((test, i) => {
                                return (
                                    <li class="set-ul-margin" key={i}>{test.title}</li>
                                )
                                })
                            }
                            </ul>
                        </td>
                        <td class="text-capitalize">{item.price}</td>
                        </tr>
                    )
                    })
                }
                </tbody>
                <tfoot>
                    <tr>
                    <th>Total Bill</th>
                    <th>{
                        this.props.selected_options.reduce( (sum, item) => sum + item.price, 0 )                                        
                        }</th>
                    </tr>
                </tfoot>
                </table>
            </div>
        )
    }
}
