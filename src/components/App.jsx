import Styles from "../components/Style.module.css"
const App = () => {
  var numbers = [2, 46, 1, 38, 4];
  return (
    <div>
      
        <p>
          {numbers.map(function (num) {
          return(
            <>
            <p className={Styles.array}>{num*2}</p>
            </>
          )
        })}
        </p>
      <hr/>
      <p className={Styles.array}>
        {numbers.filter(function(number){
          return number>25;
        })}
      </p>
      <hr />
      <p  className={Styles.array} >
        {numbers.find((element)=>{
          return element >30;
        })}
      </p>
      <hr />
      <p  className={Styles.array}>
        {numbers.findIndex((element)=>{
          return element >30;
        })}
      </p>
      <hr/>
      <p  className={Styles.array}>
        {numbers.reduce((accumulator,currentValue)=>{
          return accumulator+currentValue;
        },0)}
      </p>
    </div>
  );
};
export default App;
