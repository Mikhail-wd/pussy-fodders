import React from 'react';
import pussyPhoto from '../img/Photo.png';

function pussy({data,select}){

    const pussData=data;

    let mouses ='';
    let colors = '';
    
    switch (data.mouseForKitty ){
        case 1:
            mouses = 'мышь';
            break;
        case 2 || 3 || 4:
            mouses = data.mouseForKitty+' мыши';
            break;
        case data.mouseForKitty = 5 || data.mouseForKitty > 5 :
            mouses = data.mouseForKitty+' мышей';
            break;
        default:
            break;
    };

    switch (data.selected){
        case true:
            colors = 'selected';
            break;
        case false:
            colors = '';
            break;
        default:
            break;
    }

    if (data.inStorage===false){
        colors=false;
    }

    function trackData(){        
        pussData.selected=!pussData.selected;
        select(pussData.id,pussData.selected);

    }
       


    return(
        <div className={colors!==false ? 'pussysFodderWrapper' : 'pussysFodderWrapper blure'} onClick={trackData}>
            <div className={data.selected===true ? 'slice selectedSlice' : 'slice'}>                              
            </div>
            <div className={data.selected===true && data.inStorage===true? 'foddersHeader selectedHeader' : 'foddersHeader'}>
                <p></p>
                <p>Сказочное заморское яство</p>
            </div>
            <div className={data.selected===true ? 'pussysContent selectedContent' : 'pussysContent'}>
                <h1>Нямушка</h1>
                <h2>с {data.title}</h2>
                <ul>
                    <li>{data.stuck} порций</li>
                    <li>{mouses} в подарок</li>
                    { data.happyMaster!==false ? <li>{data.happyMaster}</li> : ""}
                </ul>
                <img className='pussyPhoto' src={pussyPhoto} alt='sweetPussy' />
                <div className={data.selected===true ? 'roundWeight backGroundRed' : 'roundWeight'}>
                    <p>{data.weight}</p>
                    <p>кг</p>
                </div>                
            </div>            
            { data.selected===true ? <p className='pussysFooter'>{data.description}</p> : <p className='pussysFooter'>Чего сидишь? Порадуй котэ<a href='###' className='colorBlue'> купи.</a></p>}
            { colors===false ? <p className='pussysFooter2'>Печалька, с курой закончился.</p> : ''}                
        </div>
    );

}

export default pussy;