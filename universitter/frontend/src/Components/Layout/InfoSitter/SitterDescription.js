import Styles from './SitterDescription.module.css'

function SitterDescription(){
    return(
        <div >
            <div className={Styles.container}>
            <h1>Descrição</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam accumsan sagittis mauris at varius. 
                Vestibulum tempus purus sit amet laoreet facilisis. 
                Nam ornare tellus eget nisi malesuada, in dapibus leo aliquet. 
                Aliquam sit amet hendrerit lorem. 
                Donec facilisis, mauris eget finibus dapibus, felis dui luctus massa, nec tincidunt sapien mauris sit amet urna. 
                Integer sodales massa enim, ut consectetur arcu dictum quis.</p>
            </div>
           
                <hr></hr>
        </div>
    )
}

export default SitterDescription;