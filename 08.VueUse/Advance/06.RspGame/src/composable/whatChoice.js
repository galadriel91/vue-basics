export const useChoice = () => {
    const rspCode = {
        바위 : '-45px',
        보 : '-354px',
        가위 : '-664px'
    }

    const point = {
        바위 : 1,
        보: 0,
        가위 : -1
    }

    const whatCpuPick = (value) => {
        return Object.entries(rspCode).find(v=>{
            if(v[1] === value){
                return v
            }
        })[0]
    }

    return { rspCode , point , whatCpuPick}
}