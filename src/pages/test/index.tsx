import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Line,
  BarProps,
  Tooltip,
  Cell,
  Area,
  AreaChart,
  ComposedChart,
  CartesianGrid
} from 'recharts';

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

// const getAttributesInt = (min,max)=>{
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
// }
//
// const get_random = () =>{
//   let array = []
//   for (let i=0;i<4;i++){
//     const random = Number(getAttributesInt(0,12))
//     array.push(random)
//
//   }
//   return array
//
// }
//
// function unique (arr) {
//   return Array.from(new Set(arr))
// }
//
// const check_recheck = (result) =>{
//   if (result.length < 4){
//     for (let i = result.length;i<4;i++){
//       const random = Number(getAttributesInt(0,12))
//       result.push(random)
//     }
//   }
//   return result
// }
//
//
// const check = () => {
//   // const a = [1,2,3,4,5,6,7,8,9,10,11,12]
//
//   const b = get_random()
//
//   let b_result = unique(b)
//
//   // const c_result = check_recheck(b_result)
//
//   let start = false
//
//   let d = []
//
//   for (let i=0;i<1000;i++){
//     if (start == false){
//       const result = check_recheck(b_result)
//       if (result.length = 4){
//         start = true
//         d = result
//       }
//     }
//   }
//
//   // console.log(d);
//
//
//   // console.log(result.length);
//
// }
//
//
// const shuffle = (input_array) => {
//   let  input = input_array;
//
//   for (let i = input.length-1; i >=0; i--) {
//
//     let randomIndex = Math.floor(Math.random()*(i+1));
//     let itemAtIndex = input[randomIndex];
//
//     input[randomIndex] = input[i];
//     input[i] = itemAtIndex;
//   }
//   return input;
// }


const Test = () =>{
   // use effect

  // const a = [1,2,3,4,5,6,7,8,9,10]
  //
  // const b = shuffle(a)
  // console.log(b[0],b[1],b[2],b[3]);

    return (
      <div>
        <AreaChart width={730} height={250} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>
      // <button>
      //     111
      // </button>
    )
}

export default Test
