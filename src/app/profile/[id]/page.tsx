export default function UserProfile({params}: any){
    return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        
        <h3>Profile Page <span className="p-2 rounded bg-orange-200 font-bold text-black" >{params.id}</span> </h3>
    </div>
    )
}