import React, { Component } from 'react'


export default class NestedCheckBox extends Component {
    render() {
        const { categories, selected_test } = this.props;
        return (   
            <div>   
                {
                    this.props.tests.map((item, i) => {
                    return (
                        <div key={i}> 
                        <label className="checkbox">                            
                            <input
                                id={item.id}
                                name={item.name}
                                value={item.name}
                                checked={categories.indexOf(item.name) > -1}
                                onChange={this.props.handleCheckBox}
                                type="checkbox"
                                key={i}
                            />  {item.name} <br/>
                        </label>
                                {
                                    selected_test.length > 0 && item.children_categories && item.children_categories.map((sub_category, i) => {
                                        return (
                                            selected_test.map((category) => { return category.children_categories}).map(child => {
                                               return (child !== null ?
                                                <label className="checkbox lm25" key={i}>
                                                <input
                                                    id={sub_category.id}
                                                    name={sub_category.name}
                                                    value={sub_category.name}
                                                    checked={categories.indexOf(sub_category.name) > -1}
                                                    onChange={this.props.handleSubCheckBox}
                                                    type="checkbox" key={i}
                                                /> {sub_category.name} <br/> </label> : '')
                                            })
                                        )
                                    })
                                }
                        </div>
                    )}) 
                }
            </div>    
        )
    }
}
