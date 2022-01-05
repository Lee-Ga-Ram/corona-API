import {useState, useEffect} from 'react' 
import{ Bar, Doughnut, Line }from 'react-chartjs-2'
import axios from 'axios' 
const Contents = () => {
    const [confirmedData, setconfirmedData]= useState({
      labels:["1월", "2월", "3월"],
      datasets: [
        {
          label:"국내 누적 확진자",
          backgroundColor:"salmon",
          fill:true,
          data:[10, 5, 3]
        }
      ]
    })

    useEffect(()=>{
        const fetchEvents = async()=>{
          const res = await axios.get("http://api.covid19api.com/total/dayone/country/kr")
          makeData(res.data)
        }
         
        const makeData = (items)=>{
          // ...  안나와 웹에서
        }
        
        fetchEvents()
      }, [])
      
      //Class에서 마운트 됐을 때 바로 Method가 실행될 수 있도록 아래와 같이 useEffect 사용

    return (
        <section>
            <h1>국내 코로나 현황</h1>
            <div className='contents'>
                <div>
                <Bar data={confirmedData} options={ 
                        { title: { display: true, text: "누적 확진자 추이", fontSize: 16 } },
                        { legend: { display: true, position: "bottom" } }
                    } />
                            
                </div>
            </div>
            
        </section>
    )
}

export default Contents
