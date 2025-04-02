export const FetchUser = async () => {
    const url =await fetch("https://jsonplaceholder.typicode.com/users");
    if(!url.ok){
      throw Error("unable to fetch data")
    }
    const data = await url.json();
  return (
    data
  )
}

export const FetchSingleUser = async ({params}) => {
  const {id}=params;
  const url =await fetch("https://jsonplaceholder.typicode.com/users/"+id
  );
  if(!url.ok){
    throw Error("invalid user")
  }
  con
  const data = await url.json();
return (
  data
)
}