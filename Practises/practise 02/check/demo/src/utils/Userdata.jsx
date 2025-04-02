const Userdata = async () => {


        const url = await fetch ("https://jsonplaceholder.typicode.com/users");
        const data = await url.json();

  return (
    data
  )
}

export default Userdata

export const Usersingleloader = async ({params}) => {

  const {id} = params;

  const url = await fetch ("https://jsonplaceholder.typicode.com/users/" +id );
  const data = await url.json();

return (
data
)
}
