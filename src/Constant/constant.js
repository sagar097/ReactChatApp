export const credentials = {
    projectID: '92712763-5235-441b-a757-107ff84d3b4c'
};


export const setCredToLocalStorage = (props) => {
    const { username, password } = props;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

export const getCredToLocalStorage = (key)=>{
   return  localStorage.getItem(key);
}