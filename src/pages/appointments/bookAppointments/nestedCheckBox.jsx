import React, { Component } from 'react'


export default class NestedCheckBox extends Component {
    render() {
        const { categories, selected_test, tests } = this.props;
        return (   
            <div>   
                {
                    tests.map((item, i) => {
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
                                            <div className={categories.includes(item.name) ? 'display-block' : 'display-none'} key={i}>
                                                {
                                                    <label className="checkbox lm25">
                                                    <input
                                                        id={sub_category.id}
                                                        name={sub_category.name}
                                                        value={sub_category.name}
                                                        checked={categories.indexOf(sub_category.name) > -1}
                                                        onChange={this.props.handleSubCheckBox}
                                                        type="checkbox" key={i}
                                                        /> {sub_category.name} <br/> </label>
                                                }
                                            </div>
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
