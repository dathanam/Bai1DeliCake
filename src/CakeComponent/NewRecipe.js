import React, { useState, useEffect } from 'react';
import './Style/NewRecipe.css'

function NewRecipe() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [objectURL, setObjectURL] = useState();
    useEffect(() => {
        if (!selectedFile) return;
        setObjectURL(URL.createObjectURL(selectedFile))
    }, [selectedFile])
    return (
        <div className="NewRecipe">
            <div className="borderNewRecipe">
                <div className="row IDPublic">
                    <div className="col-6">
                        <h3>ID</h3>
                        <input></input>
                    </div>
                    <div className="col-6">
                        <h3>Public at</h3>
                        <input type="date"></input>
                    </div>
                </div>
                <div>
                    <h3>Image</h3>
                    <img className="imageCake" src={objectURL} alt="Cake" width="150" height="150" />
                </div>

            </div>
        </div>
    );
}

export default NewRecipe;