import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductIngredient } from './product-ingredient';

export const ProductIngredientRow = ({ cols = 3, index, arrayIngredient }) => {

    const colsArray = new Array(cols).fill(0)

    const show = () => {
        colsArray.map((item, i) => {
            console.log(`==== ${i}, ${index + i}`)
            return (
                <div className={`col-md-${12 / cols}`} key={i}>
                    {
                        arrayIngredient[index + i] ?
                            <ProductIngredient
                                urlIngredient={arrayIngredient[index + i].url}
                                content={arrayIngredient[index + i].content}
                            />
                            : null
                    }
                </div>
            )
        })
    }

    return (
        <div className="row">
            {
                colsArray.map((item, i) => {
                    console.log(`==== ${i}, ${index + i}`)
                    return (
                        <div className={`col-md-${12 / cols}`} key={i}>
                            {
                                arrayIngredient[index + i] ?
                                    <ProductIngredient
                                        urlIngredient={arrayIngredient[index + i].url}
                                        content={arrayIngredient[index + i].content}
                                    />
                                    : null
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}