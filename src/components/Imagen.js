import React from 'react';

const Imagen = (props) => {

    const {largeImageURL, likes, imageWidth, imageHeight, views} = props.imagen;
    var width = 14*(imageWidth/imageHeight);
    var sum = 0;
    sum = sum+width;
    console.log(sum);

    return (
        <div className="image" 
            style={{
                backgroundImage:`url(${largeImageURL})`,
                width: `${width}vw`
            }}>
            <div className="content">
                <span><b>Likes:</b> {likes}  </span><br/>
                <span><b>Views:</b> {views}  </span><br/>
                
                <a 
                    href={largeImageURL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        fontWeight: 'bold'
                    }}>
                    Large size</a>
            </div>
        </div>
    )

}

export default Imagen;