
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data =>{
        console.log('sign up data', data);
    }
    const handleUpdateProfile = data =>{
      console.log('update profile',data);
    }

  return (
    <>
      
      <h1>Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'sign up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>sign up</h1>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile update'}
       submitBtnText={'update'}
       handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always Update your Profile</p>
        </div>
      </ReusableForm>
      
    </>
  )
}

export default App
