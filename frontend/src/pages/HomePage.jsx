// // import toast from "react-hot-toast"
// // import SortRepos from "../components/SortRepos"
// // import ProfileInfo from '../components/ProfileInfo'
// // import Search from "../components/Search"
// // import Repos from '../components/Repos'
// // import { useCallback, useEffect, useState } from "react"


// // const HomePage = () => {
// //  const [userProfile, setUserProfile]=useState(null);
// //  const [repos, setRepos]=useState([]);
// //  const [loading, setLoading]=useState(false);

// //  const [sortType, setSortType]=useState("forks");


// //  const getUserProfileAndREpos=useCallback(
// //   async()=>{
// //     setLoading(true)
// //     try{
// //      const userRes=await fetch("https://api.github.com/users/burakorkmez")
// //      const userProfile=await userRes.json()
// //   setUserProfile(userProfile)
  
// //   const repoRes=await fetch(userProfile.repos_url)
// //   const repos=await repoRes.json();
// //   setRepos(repos)
// //  console.log("userProfile:", userProfile)
// //  console.log("repos:", repos)
  
// //     }catch(error){
// //       toast.error(error.message)
// //     }finally{
// //       setLoading(false)
// //     }
// //    },[]
// //  )


// //  useEffect(()=>{
// //   getUserProfileAndREpos()
// //  },[getUserProfileAndREpos])


// //   return (
// //      <div className="m-4">
// //       <Search/>
// //       <SortRepos/>
// //       <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
// //         <ProfileInfo userProfile={userProfile}/>
        
// //       <Repos/>
// //       </div>
// //      </div>

// //   )
// // }

// // export default HomePage

// import toast from "react-hot-toast";
// import SortRepos from "../components/SortRepos";
// import ProfileInfo from "../components/ProfileInfo";
// import Search from "../components/Search";
// import Repos from "../components/Repos";
// import { useCallback, useEffect, useState } from "react";

// const HomePage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [repos, setRepos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [sortType, setSortType] = useState("forks");

//   const getUserProfileAndRepos = useCallback(async () => {
//     setLoading(true);
//     try {
//       const userRes = await fetch("https://api.github.com/users/ashiii1");
//       const userProfile = await userRes.json();
//       setUserProfile(userProfile);

//       const repoRes = await fetch(userProfile.repos_url);
//       const repos = await repoRes.json();
//       setRepos(repos);

//       console.log("userProfile:", userProfile);
//       console.log("repos:", repos);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     getUserProfileAndRepos();
//   }, [getUserProfileAndRepos]);

//   return (
//     <div className="m-4">
//       <Search />
//       <SortRepos />
//       <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
//         <ProfileInfo userProfile={userProfile} />
//         <Repos repos={repos} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import toast from "react-hot-toast";
import SortRepos from "../components/SortRepos";
import Search from "../components/Search";
import Repos from "../components/Repos";
import ProfileInfo from '../components/ProfileInfo'
import { useCallback, useEffect, useState } from "react";
import Spinner from '../components/Spinner'

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("forks");

  const getUserProfileAndRepos = useCallback(async (username="ashiii1") => {
    setLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userProfile = await userRes.json();
      setUserProfile(userProfile);

      const repoRes = await fetch(userProfile.repos_url);
      const repos = await repoRes.json();
      setRepos(repos);      

      return {userProfile,repos}
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch= async (e, username)=>{
    e.preventDefault()
    setLoading(true);
    setRepos([]);
    setUserProfile(null)

   const {userProfile,repos}= await getUserProfileAndRepos(username)

   setUserProfile(userProfile);
   setRepos(repos)
   setLoading(false)
  }
  const onSort = (sortType) => {
		if (sortType === "recent") {
			repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
		} else if (sortType === "stars") {
			repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //descending, most stars first
		} else if (sortType === "forks") {
			repos.sort((a, b) => b.forks_count - a.forks_count); //descending, most forks first
		}
		setSortType(sortType);
		setRepos([...repos]);
	};

  return (
    <div className="m-4">
      <Search onSearch={onSearch}/>
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType}/>}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile}/>}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner/>}
      </div>
    </div>
  );
};

export default HomePage;
