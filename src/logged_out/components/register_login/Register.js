import React from 'react'
import { useState,useRef } from "react";
import Typography from "@mui/material/Typography";
import { Button,TextField,Box } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Phone } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { useEffect } from 'react';
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";
import {auth,db} from '../../../firebase.js';
import { useHistory,useParams } from 'react-router-dom';
import './Register.css' 
// import dayjs from 'dayjs'
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';


// dayjs.extend(utc);
// dayjs.extend(timezone);
export const Register = () => {


    const history=useHistory();
    const {jobid}=useParams();
    
    useEffect(()=>{
        document.title="Register"
        window.scrollTo(0,0);
    },[])

    const [firstName, setFirstName] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [lastName, setLastName] = useState(null);
    const [degree, setDegree] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [province, setProvince] = useState(null);
    const [phone, setPhone] = useState(null);
    const [sin, setSin] = useState(null);
    const [landmark, setLandmark] = useState(null);
    const [date_avail, setDate_avail] = useState({$d:null});
    const [date_birth, setDate_birth] = useState({$d:null});
    const [date_expire, setDate_expire] = useState({$d:null});
    const [licenseno, setLicenseno] = useState(null);
    const [fullName, setFullName] = useState(null);
    const [relationship, setRelationship] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [companyphone, setCompanyphone] = useState(null);
    const [companyaddress, setCompanyaddress] = useState(null);
    const [licenseprov, setLicenseprov] = useState(null);
    const [country_birth, setCountry_birth] = useState(null);
    const [highschool, setHighschool] = useState(null);
    const [schooladdress, setSchooladdress] = useState(null);
    const [fromschool, setFromschool] = useState(null);
    const [toschool, setToschool] = useState(null);
    const [college, setCollege] = useState(null);
    const [collegeaddress, setCollegeaddress] = useState(null);
    const [fromcollege, setFromcollege] = useState(null);
    const [tocollege, setTocollege] = useState(null);
    const [collegedegree, setCollegedegree] = useState(null);
    const [other, setOther] = useState(null);
    const [otheraddress, setOtheraddress] = useState(null);
    const [fromother, setFromother] = useState(null);
    const [toother, setToother] = useState(null);
    const [degreeother, setDegreeother] = useState(null);
    const [agency, setAgency] = useState(null);
    const [payrate, setPayrate] = useState(null);
    const [companyassigned, setCompanyassigned] = useState(null);
    const [position, setPosition] = useState(null);
    const [password,setPassword] = useState(null);
    const [prevcompany, setPrevcompany] = useState(null);
    const [prevaddress, setPrevaddress] = useState(null);
    const [prevphone, setPrevphone] = useState(null);
    const [supervisor, setSupervisor] = useState(null);
    const [jobtitle, setJobtitle] = useState(null);
    const [startsal, setStartsal] = useState(null);
    const [endsal, setEndsal] = useState(null);
    const [responsibility, setResponsibility] = useState(null);
    const [fromprev, setFromprev] = useState(null);
    const [toprev, setToprev] = useState(null);
    const [reason, setReason] = useState(null);
    const loginPassword = useRef();
    const [graduate,setGraduate]=useState(false);
    const [graduatehs,setGraduatehs]=useState(false);
    const [agree,setAgree]=useState(false);
    const [emergencyname, setEmergencyname] = useState(null);
    const [emergencyno, setEmergencyno] = useState(null);
    const [emergencyrelation, setEmergencyrelation] = useState(null);
    const [availableDate,setAvailableDate]=useState();
    const [dateOfBirth,setDateOfBirth]=useState();
    const [dateOfExpiry,setDateOfExpiry]=useState();
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        console.log(id);
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "startsal"){
            setStartsal(value);
        }
        if(id === "endsal"){
            setEndsal(value);
        }
        if(id === "emergencyname"){
            setEmergencyname(value);
        }
        if(id === "emergencyno"){
            setEmergencyno(value);
        }
        if(id === "emergencyrelation"){
            setEmergencyrelation(value);
        }
        if(id === "responsibility"){
            setResponsibility(value);
        }
        if(id === "fromprev"){
            setFromprev(value);
        }
        if(id === "toprev"){
            setToprev(value);
        }
        if(id === "sin"){
            setSin(value);
        }
        if(id === "reason"){
            setReason(value);
        }
        if(id === "jobtitle"){
            setJobtitle(value);
        }
        if(id === "supervisor"){
            setSupervisor(value);
        }
        if(id === "prevphone"){
            setPrevphone(value);
        }
        if(id === "prevaddress"){
            setPrevaddress(value);
        }
        if(id === "prevcompany"){
            setPrevcompany(value);
        }
        if(id === "position"){
            setPosition(value);
        }
        if(id === "companyassigned"){
            setCompanyassigned(value);
        }
        if(id === "payrate"){
            setPayrate(value);
        }
        if(id === "agency"){
            setAgency(value);
        }
        if(id === "degreeother"){
            setDegreeother(value);
        }
        if(id === "toother"){
            setToother(value);
        }
        if(id === "fromother"){
            setFromother(value);
        }
        if(id === "otheraddress"){
            setOtheraddress(value);
        }
        if(id === "other"){
            setOther(value);
        }
        if(id === "collegedegree"){
            setCollegedegree(value);
        }
        if(id === "tocollege"){
            setTocollege(value);
        }
        if(id === "fromcollege"){
            setFromcollege(value);
        }
        if(id === "collegeaddress"){
            setCollegeaddress(value);
        }
        if(id === "college"){
            setCollege(value);
        }
        if(id === "toschool"){
            setToschool(value);
        }
        if(id === "degree"){
            setDegree(value);
        }
        if(id === "highschool"){
            setHighschool(value);
        }
        if(id === "schooladdress"){
            setSchooladdress(value);
        }
        if(id === "fromschool"){
            setFromschool(value);
        }
        if(id === "fullName"){
            setFullName(value);
        }
        if(id === "companyName"){
            setCompanyName(value);
        }
        if(id === "relationship"){
            setRelationship(value);
        }
        if(id === "companyphone"){
            setCompanyphone(value);
        }
        if(id === "companyaddress"){
            setCompanyaddress(value);
        }
        if(id === "date_avail"){
            setDate_avail(value);
        }
        if(id === "date_birth"){
            setDate_birth(value);
        }
        if(id === "date_expire"){
            setDate_expire(value);
        }
        if(id === "licenseno"){
            setLicenseno(value);
        }
        if(id === "licenseprov"){
            setLicenseprov(value);
        }
        if(id === "country_birth"){
            setCountry_birth(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email")
        {
            setEmail(value);
        }
        if(id === "appartment")
        {
            setAddress(value);
        }
        if(id === "street")
        {
            setLandmark(value);
        }
        if(id === "city")
        {
            setCity(value);
        }
        if(id === "province")
        {
            setProvince(value);
        }
        if(id === "phone")
        {
            setPhone(value);
        }
        if(id === "password")
        {
            setPassword(value);
        }

    }

    useEffect(()=>{
        var s=String(date_avail.$d);
        s=s.substring(0,15);
        setAvailableDate(s);
    },[date_avail])

    useEffect(()=>{
        var s=String(date_birth.$d);
        s=s.substring(0,15);
        setDateOfBirth(s);
    },[date_birth])

    useEffect(()=>{
        var s=String(date_expire.$d);
        s=s.substring(0,15);
        setDateOfExpiry(s);
    },[date_expire])

    const [availableTimes,setAvailableTimes]=useState({
        "Monday":false,"Tuesday":false,"Wednesday":false,"Thursday":false,"Friday":false,"Saturday":false,"Sunday":false
    })
    const [certifications,setCertifications]=useState({
        "PSW":false,"RPN":false,"RN":false
    })
    const [forklift,setForklift]=useState({
        "Counter Balance":false,"Propane":false,"Electric":false,"Cross-Dock":false,"Clamp":false,"Raymond Reach":false,
        "Reverse Steering":false,"Single Walkie":false,"Double Walkie":false
    })
    const [labour,setLabour]=useState({
        "General Labour":false,"Lead Hand":false,"Painting":false,"Flaggig":false
    })
    const [gclass,setGclass]=useState({
        "Pick-Up":false,"5 Ton":false,"Cube Van":false
    })
    const [azdriver,setAzdriver]=useState({
        "AZ Driver":false,"Fast Card":false,"Highway CDN":false,"Highway USA":false,"Local":false,"Mountains":false,
        "Northern Switches":false,"Switches":false,"Forklift":false,"Handbombing OK":false,"Day Cab":false,"Tandem":false,
        "Tri-Axle":false,"Shunting-Daycab":false,"Shunting-Ottawa":false,"Shunting-Capacity":false,"10 Speed":false,"13 Speed":false,
        "15 Speed":false,"18 Speed":false,"6 Speed":false,"Automatic":false,"Bunk Truck":false,"Dump Trailers":false,"Split Shift":false,
        "Dry Van":false,"ladders":false,"Luggar":false,"Over Size":false,"Pumps":false,"Reefers":false,"Curtain Sides":false,
        "Drop Deck":false,"Flat Bed":false,"Ropes and Tarps":false,"Boom":false,"HI-AB":false,"Lumbar":false,"Steel":false,
        "Moffat":false,"Containers":false,"Super Van":false,"Dry Bulk":false,"Tankers":false,"A Trains":false,"B Trains":false,
        "Tailgate":false,"Waste":false
    })
    const [azdriverexp,setAzdriverexp]=useState({
        "Under 1 year":false,"Over 1 year":false,"Over 2 years":false,"Over 3 years":false,"Over 5 years":false,"Over 10 years":false
    })
    const [driverdoc,setDriverdoc]=useState({
        "Drivers Abstract":false,"CVOR Abstract":false,"Criminal Record Check":false,"Dangerous Goods":false,"WHMIS":false,"FAST Card":false,
        "Drivers Licence":false,"Drivers Licence Expiry":false
    })
    const [dzdriver,setDzdriver]=useState({
        "DZ Driver":false,"Tandem":false,"Tri-Axle Dump":false,"Forklift":false,"Residential Recycling":false,"Local":false,
        "10 Speed":false,"Residential Waste":false,"Highway CDN":false,"Yard Waste":false,"Highway USA":false,"Automatic":false,
        "Side Loading 1 man":false,"Dry Van":false,"Front End Loader":false,"Dry Van":false,"Rear Packing 2 Man":false,
        "Luggar":false,"Roll Off":false,"Manual Transmission":false,"Reefers":false,"Curtain Sides":false,"Flat Bed":false,
        "Ropes and Tarps":false,"Boom":false,"HI-AB":false,"Lumber":false,"Steel":false,"Moffat":false,"Containers":false,
        "Dry Bulk":false,"Tankers":false,"Tailgate":false
    })
    const [dzdriverexp,setDzdriverexp]=useState({
        "Under 1 year":false,"Over 1 year":false,"Over 2 years":false,"Over 3 years":false,"Over 5 years":false,"Over 10 years":false
    })
    const [language,setLanguage]=useState({
        "English":false,"French":false
    })
    const [machineop,setMachineop]=useState({
        "CNC":false,"Lathe":false,"Punch Press":false,"Slitter":false
    })
    const [management,setManagement]=useState({
        "Scheduling":false,"Inventory":false,"Supervision":false,"Purchasing/Buying":false
    })
    const [manufacturing,setManufacturing]=useState({
        "Assembly":false,"Inspecting/Q.A.":false,"Packaging":false,"Cool Environment":false,"High-Speed Automation":false
    })
    const [warehouse,setWarehouse]=useState({
        "Stocking":false,"Order Picker":false,"Shipping":false,"Receiving":false,"Biils of Landing":false,"RF Scanning":false
    })
    const [welding,setWelding]=useState({
        "MIG":false,"TIG":false,"ARC":false
    })
    // useEffect(()=>{
    //     console.log(forklift);
    // },[forklift])
    const handleAvailableTimesChange=(e)=>{
        const {name,checked}=e.target;
        setAvailableTimes((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleCertificationsChange=(e)=>{
        const {name,checked}=e.target;
        setCertifications((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleForkliftChange=(e)=>{
        const {name,checked}=e.target;
        setForklift((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleLabourChange=(e)=>{
        const {name,checked}=e.target;
        setLabour((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleGclassChange=(e)=>{
        const {name,checked}=e.target;
        setGclass((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleAzdriverChange=(e)=>{
        const {name,checked}=e.target;
        setAzdriver((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleAzdriverExpChange=(e)=>{
        const {name,checked}=e.target;
        setAzdriverexp((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleDriverdocChange=(e)=>{
        const {name,checked}=e.target;
        setDriverdoc((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleDzdriverChange=(e)=>{
        const {name,checked}=e.target;
        setDzdriver((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleDzdriverExpChange=(e)=>{
        const {name,checked}=e.target;
        setDzdriverexp((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleLanguageChange=(e)=>{
        const {name,checked}=e.target;
        setLanguage((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleMachineopChange=(e)=>{
        const {name,checked}=e.target;
        setMachineop((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleManagementChange=(e)=>{
        const {name,checked}=e.target;
        setManagement((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleManufacturingChange=(e)=>{
        const {name,checked}=e.target;
        setManufacturing((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleWarehouseChange=(e)=>{
        const {name,checked}=e.target;
        setWarehouse((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }
    const handleWeldingChange=(e)=>{
        const {name,checked}=e.target;
        setWelding((prevValue)=>({
            ...prevValue,
            [name]:checked
        }))
    }

    const signUp=(e)=>{
        e.preventDefault();
        // console.log(email,firstName,lastName);
        // e.preventDefault();
        // auth.createUserWithEmailAndPassword(email,password)
        // .then((authUser)=>{
        //     db.collection('users').doc(authUser.user.uid).set({
        //         firstName,lastName,email,graduate,
        //         company:[]
        //     })
        //     .then(()=>{
        //         auth.signInWithEmailAndPassword(email,password)
        //         .then(auth=>{
        //             if(auth) history.push('/joblistings')
        //         }).catch(error=>alert(error.message))
        //     }).catch(error=>alert(error.message))
        // }).catch(error=>alert(error.message))

        if(!jobid){
            history.push('/joblistings')
        }
        else{
            db.collection('Listings').doc(jobid).get()
            .then(doc=>{
                console.log(doc.data());
                let newList=doc.data().list;
                console.log("newlist: ",newList);
                newList.push({
                    firstName,lastName,sin,
                    email,address,landmark,city,province,phone,availableDate,dateOfBirth,
                    emergencyname,emergencyno,emergencyrelation,licenseno,dateOfExpiry,
                    licenseprov,country_birth,
                    availableTimes,certifications,forklift,labour,gclass,
                    azdriver,azdriverexp,driverdoc,dzdriver,dzdriverexp,
                    language,machineop,management,manufacturing,warehouse,welding,
                    fullName,relationship,companyName,companyphone,companyaddress,
                    highschool,schooladdress,fromschool,toschool,graduatehs,degree,
                    college,collegeaddress,fromcollege,tocollege,graduate,collegedegree,
                    prevcompany,prevaddress,prevphone,supervisor,jobtitle,startsal,
                    endsal,responsibility,fromprev,toprev,reason,agree
                })

                db.collection('Listings').doc(jobid).set({
                    ...doc.data(),list:newList
                })
                .then(()=>{
                    history.push('/thank')
                })
            })
        }

    }

    const handleDateAvail=(e)=>{
        setDate_avail(e.target.value);
    }

    

  return (
    <div>
        <div
        style={{
            marginTop: "13vh"
        }}
        ></div>
        <Typography color={"rgba(71,42,178)"} fontFamily={"serif"} variant="h4">
            Personal Information
        </Typography>
        <div className='personal-form-body'>
            {/* <div className='username'>
                <label className='form_label' for="firstName">Full Name: </label>
                <input className='form_input' type='text' value={firstName} onChange={(e) => handleInputChange(e)} id='firstName' placeholder='First Name'/>
                <input className='form_input' type='text' value={lastName} onChange={(e) => handleInputChange(e)} id='lastName' placeholder='Last Name'/>
            </div> */}
            <div className='name'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Full Name:
                </Typography>
                <TextField required
                    sx={{width:"25vw"}}
                    className="form_input"
                    type="text"
                    value={firstName}
                    onChange={(e) => handleInputChange(e)}
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    variant="outlined"
                    margin="normal"
                />
                <TextField required
                    sx={{width:"25vw",marginLeft:"3vw"}}
                    className="form_input"
                    type="text"
                    value={lastName}
                    onChange={(e) => handleInputChange(e)}
                    id="lastName"
                    placeholder="Last Name"
                    variant="outlined"
                    margin="normal"
                />
                <Typography sx={{marginLeft:"5vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    SIN Number:
                </Typography>
                <TextField
                    required
                    sx={{width:"30vw"}}
                    className="form_input"
                    type="text"
                    value={sin}
                    onChange={(e) => handleInputChange(e)}
                    id="sin"
                    placeholder="SIN Number"
                    variant="outlined"
                    margin="normal"
                />
                {/* <Typography className="form_label" >
                    Create Password:
                </Typography>
                <VisibilityPasswordTextField
                id="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                inputRef={loginPassword}
                autoComplete="off"
                onChange={(e)=>handleInputChange(e)}
                FormHelperTextProps={{ error: true }}
                onVisibilityChange={setIsPasswordVisible}
                isVisible={isPasswordVisible}
                /> */}
            </div>
            <div className='email'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Email-ID:
                </Typography>
                <TextField required
                    style={{
                        width:"70vw"
                    }}
                    className="form_input"
                    type="text"
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                    id="email"
                    placeholder="Email-addresss"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='address'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Address:
                </Typography>
                <TextField
                    style={{
                        width:"35vw"
                    }}
                    className="form_input"
                    type="text"
                    value={address}
                    onChange={(e) => handleInputChange(e)}
                    id="appartment"
                    placeholder="Appartment/Unit-No."
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    style={{
                        width:"30vw",
                        marginLeft:"5vw"
                    }}
                    className="form_input"
                    type="text"
                    value={landmark}
                    onChange={(e) => handleInputChange(e)}
                    id="street"
                    placeholder="Street/Locality"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    style={{
                        width:"35vw"
                    }}
                    className="form_input"
                    type="text"
                    value={city}
                    onChange={(e) => handleInputChange(e)}
                    id="city"
                    placeholder="City"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    style={{
                        width:"30vw",
                        marginLeft:"5vw"
                    }}
                    className="form_input"
                    type="text"
                    value={province}
                    onChange={(e) => handleInputChange(e)}
                    id="province"
                    placeholder="Province"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='phone_cell'
            style={{
                width:"80%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Phone:
                </Typography>
                
                <TextField
                    required
                    sx={{marginLeft:"0vw"}}
                    className="form_input"
                    type="text"
                    value={phone}
                    onChange={(e) => handleInputChange(e)}
                    id="phone"
                    placeholder="Mobile Number"
                    variant="outlined"
                    margin="normal"
                />
                <Typography sx={{marginLeft:"5vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Availability:
                </Typography>
                <LocalizationProvider sx={{marginLeft:"-6vw"}} dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="From"
                        value={date_avail}
                        id="date_avail"
                        onChange={setDate_avail}
                        slotProps={{
                        textField: {
                            helperText: null,
                        },
                        }}
                    />
                </LocalizationProvider>
                <Typography sx={{marginLeft:"5vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Date of Birth:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="D.O.B."
                        value={date_birth}
                        id="date_birth"
                        onChange={setDate_birth}
                        slotProps={{
                        textField: {
                            helperText: null,
                        },
                        }}
                    />
                </LocalizationProvider>
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h4" fontFamily={"serif"}>
            Emergency Contact Information
        </Typography>
        <div className='validation'>
            
            <div className='license'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Contact Name :
                </Typography>
                
                <TextField
                    sx={{
                        paddingRight:"2vw",
                        width:"26vw"
                    }}
                    className="form_input"
                    type="text"
                    value={emergencyname}
                    onChange={(e) => handleInputChange(e)}
                    id="emergencyname"
                    placeholder="Enter Full Name"
                    variant="outlined"
                    margin="normal"
                />
                
                {/* <Typography sx={{paddingLeft:"5vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Expiry :
                </Typography>
                <LocalizationProvider sx={{
                        width:"20vw"
                    }}
                 dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Expiry Date"
                    value={date_expire}
                        id="date_expire"
                    slotProps={{
                    textField: {
                        helperText: null,
                    },
                    }}
                />
            </LocalizationProvider> */}
            </div>

            <div className='license1'
            style={{
                // width:"60%",
                display:"flex",
                // justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Relation ship :
                </Typography>
                
                <TextField
                    sx={{
                        marginLeft:"3vw",
                        paddingRight:"1.3vw",
                        width:"25vw"
                    }}
                    className="form_input"
                    type="text"
                    value={emergencyrelation}
                    onChange={(e) => handleInputChange(e)}
                    id="emergencyrelation"
                    placeholder="Enter relation"
                    variant="outlined"
                    margin="normal"
                />
                
                <Typography sx={{paddingLeft:"3vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Phone Number :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={emergencyno}
                    onChange={(e) => handleInputChange(e)}
                    id="emergencyno"
                    placeholder="Enter number"
                    variant="outlined"
                    margin="normal"
                />
                
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h4" fontFamily={"serif"}>
            Truck Driver validation(For Truck Driving Positions)
        </Typography>
        <div className='validation'>
            
            <div className='license'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    License Number :
                </Typography>
                
                <TextField
                    sx={{
                        paddingRight:"2vw",
                        width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={licenseno}
                    onChange={(e) => handleInputChange(e)}
                    id="licenseno"
                    placeholder="License Number"
                    variant="outlined"
                    margin="normal"
                />
                
                <Typography sx={{paddingLeft:"5vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Expiry :
                </Typography>
                <LocalizationProvider sx={{
                        width:"20vw"
                    }}
                 dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Expiry Date"
                    onChange={setDate_expire}
                    value={date_expire}
                        id="date_expire"
                    slotProps={{
                    textField: {
                        helperText: null,
                    },
                    }}
                />
            </LocalizationProvider>
            </div>

            <div className='license'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    License Province :
                </Typography>
                
                <TextField
                    sx={{
                        paddingRight:"1.3vw",
                        width:"15vw"
                    }}
                    className="form_input"
                    type="text"
                    value={licenseprov}
                    onChange={(e) => handleInputChange(e)}
                    id="licenseprov"
                    placeholder="License Province"
                    variant="outlined"
                    margin="normal"
                />
                
                <Typography sx={{paddingLeft:"3vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Birth Country :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={country_birth}
                    onChange={(e) => handleInputChange(e)}
                    id="country_birth"
                    placeholder="Enter Country"
                    variant="outlined"
                    margin="normal"
                />
                
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h4" fontFamily={"serif"}>
            Work Experience
        </Typography>
        <div className='workex' style={{
            paddingLeft:"2vw",
            paddingTop:"2vh"
            // width:"60%"
        }}
        >
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Available Times
            </Typography>
            <FormControl component="fieldset">
                <FormGroup  aria-label="position" row>
                    <FormControlLabel
                    value="Monday"
                    control={<Checkbox />}
                    label="Monday"
                    labelPlacement="end"
                    checked={availableTimes.Monday}
                    name="Monday"
                    onChange={handleAvailableTimesChange}
                    />
                    <FormControlLabel
                    value="Tuesday"
                    control={<Checkbox />}
                    label="Tuesday"
                    labelPlacement="end"
                    checked={availableTimes.Tuesday}
                    name="Tuesday"
                    onChange={handleAvailableTimesChange}
                    />
                    <FormControlLabel
                    value="Wednesday"
                    control={<Checkbox />}
                    label="Wednesday"
                    labelPlacement="end"
                    checked={availableTimes.Wednesday}
                    name="Wednesday"
                    onChange={handleAvailableTimesChange}
                    />
                    <FormControlLabel
                    value="Thursday"
                    control={<Checkbox />}
                    label="Thursday"
                    labelPlacement="end"
                    checked={availableTimes.Thursday}
                    name="Thursday"
                    onChange={handleAvailableTimesChange}
                    />
                    <FormControlLabel
                    value="Friday"
                    control={<Checkbox />}
                    label="Friday"
                    labelPlacement="end"
                    checked={availableTimes.Friday}
                    name="Friday"
                    onChange={handleAvailableTimesChange}
                    />
                    <FormControlLabel
                    value="Saturday"
                    control={<Checkbox />}
                    label="Saturday"
                    labelPlacement="end"
                    checked={availableTimes.Saturday}
                    name="Saturday"
                    onChange={handleAvailableTimesChange}
                    />
                    <FormControlLabel
                    value="Sunday"
                    control={<Checkbox />}
                    label="Sunday"
                    labelPlacement="end"
                    checked={availableTimes.Sunday}
                    name="Sunday"
                    onChange={handleAvailableTimesChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Certifications
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="PSW"
                    labelPlacement="end"
                    checked={certifications['PSW']}
                    name="PSW"
                    onChange={handleCertificationsChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="RPN"
                    labelPlacement="end"
                    checked={certifications['RPN']}
                    name="RPN"
                    onChange={handleCertificationsChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="RN"
                    labelPlacement="end"
                    checked={certifications['RN']}
                    name="RN"
                    onChange={handleCertificationsChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Forklift
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Counter Balance"
                    labelPlacement="end"
                    checked={forklift['Counter Balance']}
                    name="Counter Balance"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Propane"
                    labelPlacement="end"
                    checked={forklift.Propane}
                    name="Propane"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Electric"
                    labelPlacement="end"
                    checked={forklift.Electric}
                    name="Electric"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Cross-Dock"
                    labelPlacement="end"
                    checked={forklift['Cross-Dock']}
                    name="Cross-Dock"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Clamp"
                    labelPlacement="end"
                    checked={forklift.Clamp}
                    name="Clamp"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Raymond Reach"
                    labelPlacement="end"
                    checked={forklift['Raymond Reach']}
                    name="Raymond Reach"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Reverse Steering"
                    labelPlacement="end"
                    checked={forklift['Reverse Steering']}
                    name="Reverse Steering"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Single Walkie"
                    labelPlacement="end"
                    checked={forklift['Single Walkie']}
                    name="Single Walkie"
                    onChange={handleForkliftChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Double Walkie"
                    labelPlacement="end"
                    checked={forklift['Double Walkie']}
                    name="Double Walkie"
                    onChange={handleForkliftChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                General Labour
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="General Labour"
                    labelPlacement="end"
                    checked={labour['General Labour']}
                    name="General Labour"
                    onChange={handleLabourChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Lead Hand"
                    labelPlacement="end"
                    checked={labour['Lead Hand']}
                    name="Lead Hand"
                    onChange={handleLabourChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Painting"
                    labelPlacement="end"
                    checked={labour.Painting}
                    name="Painting"
                    onChange={handleLabourChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Flagging"
                    labelPlacement="end"
                    checked={labour.Flaggig}
                    name="Flagging"
                    onChange={handleLabourChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                G Class Driver
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Pick-Up"
                    labelPlacement="end"
                    checked={gclass['Pick-Up']}
                    name="Pick-Up"
                    onChange={handleGclassChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="5 Ton"
                    labelPlacement="end"
                    checked={gclass['5 Ton']}
                    name="5 Ton"
                    onChange={handleGclassChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Cube Van"
                    labelPlacement="end"
                    checked={gclass['Cube Van']}
                    name="Cube Van"
                    onChange={handleGclassChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                AZ Driver
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="AZ Driver"
                    labelPlacement="end"
                    checked={azdriver['AZ Driver']}
                    name="AZ Driver"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Fast Card"
                    labelPlacement="end"
                    checked={azdriver['Fast Card']}
                    name="Fast Card"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Highway CDN"
                    labelPlacement="end"
                    checked={azdriver['Highway CDN']}
                    name="Highway CDN"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Highway USA"
                    labelPlacement="end"
                    checked={azdriver['Highway USA']}
                    name="Highway USA"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Local"
                    labelPlacement="end"
                    checked={azdriver.Local}
                    name="Local"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Mountains"
                    labelPlacement="end"
                    checked={azdriver.Mountains}
                    name="Mountains"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Northern Switches"
                    labelPlacement="end"
                    checked={azdriver['Northern Switches']}
                    name="Northern Switches"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Switches"
                    labelPlacement="end"
                    checked={azdriver.Switches}
                    name="Switches"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Forklift"
                    labelPlacement="end"
                    checked={azdriver.Forklift}
                    name="Forklift"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Handbombing OK"
                    labelPlacement="end"
                    checked={azdriver['Handbombing OK']}
                    name="Handbombing OK"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Day Cab"
                    labelPlacement="end"
                    checked={azdriver['Day Cab']}
                    name="Day Cab"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tandem"
                    labelPlacement="end"
                    checked={azdriver.Tandem}
                    name="Tandem"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tri-Axle"
                    labelPlacement="end"
                    checked={azdriver['Tri-Axle']}
                    name="Tri-Axle"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Shunting-Daycab"
                    labelPlacement="end"
                    checked={azdriver['Shunting-Daycab']}
                    name="Shunting-Daycab"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Shunting-Ottawa"
                    labelPlacement="end"
                    checked={azdriver['Shunting-Ottawa']}
                    name="Shunting-Ottawa"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Shunting-Capacity"
                    labelPlacement="end"
                    checked={azdriver['Shunting-Capacity']}
                    name="Shunting-Capacity"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="10 Speed"
                    labelPlacement="end"
                    checked={azdriver['10 Speed']}
                    name="10 Speed"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="13 Speed"
                    labelPlacement="end"
                    checked={azdriver['13 Speed']}
                    name="13 Speed"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="15 Speed"
                    labelPlacement="end"
                    checked={azdriver['15 Speed']}
                    name="15 Speed"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="18 Speed"
                    labelPlacement="end"
                    checked={azdriver['18 Speed']}
                    name="18 Speed"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="6 Speed"
                    labelPlacement="end"
                    checked={azdriver['6 Speed']}
                    name="6 Speed"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Automatic"
                    labelPlacement="end"
                    checked={azdriver.Automatic}
                    name="Automatic"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Bunk Truck"
                    labelPlacement="end"
                    checked={azdriver['Bunk Truck']}
                    name="Bunk Truck"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dump Trailers"
                    labelPlacement="end"
                    checked={azdriver['Dump Trailers']}
                    name="Dump Trailers"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Split Shift"
                    labelPlacement="end"
                    checked={azdriver['Split Shift']}
                    name="Split Shift"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dry Van"
                    labelPlacement="end"
                    checked={azdriver['Dry Van']}
                    name="Dry Van"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="ladders"
                    labelPlacement="end"
                    checked={azdriver.ladders}
                    name="ladders"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Luggar"
                    labelPlacement="end"
                    checked={azdriver.Luggar}
                    name="Luggar"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Over Size"
                    labelPlacement="end"
                    checked={azdriver['Over Size']}
                    name="Over Size"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Pumps"
                    labelPlacement="end"
                    checked={azdriver.Pumps}
                    name="Pumps"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Reefers"
                    labelPlacement="end"
                    checked={azdriver.Reefers}
                    name="Reefers"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Curtain Sides"
                    labelPlacement="end"
                    checked={azdriver['Curtain Sides']}
                    name="Curtain Sides"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Drop Deck"
                    labelPlacement="end"
                    checked={azdriver['Drop Deck']}
                    name="Drop Deck"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Flat Bed"
                    labelPlacement="end"
                    checked={azdriver['Flat Bed']}
                    name="Flat Bed"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Ropes and Tarps"
                    labelPlacement="end"
                    checked={azdriver['Ropes and Tarps']}
                    name="Ropes and Tarps"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Boom"
                    labelPlacement="end"
                    checked={azdriver.Boom}
                    name="Boom"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="HI-AB"
                    labelPlacement="end"
                    checked={azdriver['HI-AB']}
                    name="HI-AB"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Lumbar"
                    labelPlacement="end"
                    checked={azdriver.Lumbar}
                    name="Lumbar"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Steel"
                    labelPlacement="end"
                    checked={azdriver.Steel}
                    name="Steel"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Moffat"
                    labelPlacement="end"
                    checked={azdriver.Moffat}
                    name="Moffat"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Containers"
                    labelPlacement="end"
                    checked={azdriver.Containers}
                    name="Containers"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Super Van"
                    labelPlacement="end"
                    checked={azdriver['Super Van']}
                    name="Super Van"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dry Bulk"
                    labelPlacement="end"
                    checked={azdriver['Dry Bulk']}
                    name="Dry Bulk"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tankers"
                    labelPlacement="end"
                    checked={azdriver.Tankers}
                    name="Tankers"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="A Trains"
                    labelPlacement="end"
                    checked={azdriver['A Trains']}
                    name="A Trains"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="B Trains"
                    labelPlacement="end"
                    checked={azdriver['B Trains']}
                    name="B Trains"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tailgate"
                    labelPlacement="end"
                    checked={azdriver.Tailgate}
                    name="Tailgate"
                    onChange={handleAzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Waste"
                    labelPlacement="end"
                    checked={azdriver.Waste}
                    name="Waste"
                    onChange={handleAzdriverChange}
                    />
                    
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                AZ Driver Experience
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Under 1 year"
                    labelPlacement="end"
                    checked={azdriverexp['Under 1 year']}
                    name="Under 1 year"
                    onChange={handleAzdriverExpChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Over 1 year"
                    labelPlacement="end"
                    checked={azdriverexp['Over 1 year']}
                    name="Over 1 year"
                    onChange={handleAzdriverExpChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Over 2 years"
                    labelPlacement="end"
                    checked={azdriverexp['Over 2 years']}
                    name="Over 2 years"
                    onChange={handleAzdriverExpChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Over 3 years"
                    labelPlacement="end"
                    checked={azdriverexp['Over 3 years']}
                    name="Over 3 years"
                    onChange={handleAzdriverExpChange}
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Over 5 years"
                    labelPlacement="end"
                    checked={azdriverexp['Over 5 years']}
                    name="Over 5 years"
                    onChange={handleAzdriverExpChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Over 10 years"
                    labelPlacement="end"
                    checked={azdriverexp['Over 10 years']}
                    name="Over 10 years"
                    onChange={handleAzdriverExpChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Driver Documentation
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Drivers Abstract"
                    labelPlacement="end"
                    checked={driverdoc['Drivers Abstract']}
                    name="Drivers Abstract"
                    onChange={handleDriverdocChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="CVOR Abstract"
                    labelPlacement="end"
                    checked={driverdoc['CVOR Abstract']}
                    name="CVOR Abstract"
                    onChange={handleDriverdocChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Criminal Record Check"
                    labelPlacement="end"
                    checked={driverdoc['Criminal Record Check']}
                    name="Criminal Record Check"
                    onChange={handleDriverdocChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Dangerous Goods"
                    labelPlacement="end"
                    checked={driverdoc['Dangerous Goods']}
                    name="Dangerous Goods"
                    onChange={handleDriverdocChange}
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="WHMIS"
                    labelPlacement="end"
                    checked={driverdoc.WHMIS}
                    name="WHMIS"
                    onChange={handleDriverdocChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="FAST Card"
                    labelPlacement="end"
                    checked={driverdoc['FAST Card']}
                    name="FAST Card"
                    onChange={handleDriverdocChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Drivers Licence"
                    labelPlacement="end"
                    checked={driverdoc['Drivers Licence']}
                    name="Drivers Licence"
                    onChange={handleDriverdocChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Drivers Licence Expiry"
                    labelPlacement="end"
                    checked={driverdoc['Drivers Licence Expiry']}
                    name="Drivers Licence Expiry"
                    onChange={handleDriverdocChange}
                    />
                    
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                DZ Driver
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="DZ Driver"
                    labelPlacement="end"
                    checked={dzdriver['DZ Driver']}
                    name="DZ Driver"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tandem"
                    labelPlacement="end"
                    checked={dzdriver.Tandem}
                    name="Tandem"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tri-Axle Dump"
                    labelPlacement="end"
                    checked={dzdriver['Tri-Axle Dump']}
                    name="Tri-Axle Dump"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Forklift"
                    labelPlacement="end"
                    checked={dzdriver.Forklift}
                    name="Forklift"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Residential Recycling"
                    labelPlacement="end"
                    checked={dzdriver['Residential Recycling']}
                    name="Residential Recycling"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Local"
                    labelPlacement="end"
                    checked={dzdriver.Local}
                    name="Local"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="10 Speed"
                    labelPlacement="end"
                    checked={dzdriver['10 Speed']}
                    name="10 Speed"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Residential Waste"
                    labelPlacement="end"
                    checked={dzdriver['Residential Waste']}
                    name="Residential Waste"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Highway CDN"
                    labelPlacement="end"
                    checked={dzdriver['Highway CDN']}
                    name="Highway CDN"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Yard Waste"
                    labelPlacement="end"
                    checked={dzdriver['Yard Waste']}
                    name="Yard Waste"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Highway USA"
                    labelPlacement="end"
                    checked={dzdriver['Highway USA']}
                    name="HIghway USA"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Automatic"
                    labelPlacement="end"
                    checked={dzdriver.Automatic}
                    name="Automatic"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Side Loading 1 man"
                    labelPlacement="end"
                    checked={dzdriver['Side Loading 1 man']}
                    name="Side Loading 1 man"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dry Van"
                    labelPlacement="end"
                    checked={dzdriver['Dry Van']}
                    name="Dry Van"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Front End Loader"
                    labelPlacement="end"
                    checked={dzdriver['Front End Loader']}
                    name="Front End Loader"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dry Van"
                    labelPlacement="end"
                    checked={dzdriver['Dry Van']}
                    name="Dry Van"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Rear Packing 2 Man"
                    labelPlacement="end"
                    checked={dzdriver['Rear Packing 2 Man']}
                    name="Rear Packing 2 Man"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Luggar"
                    labelPlacement="end"
                    checked={dzdriver.Luggar}
                    name="Luggar"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Roll Off"
                    labelPlacement="end"
                    checked={dzdriver['Roll Off']}
                    name="Roll Off"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Manual Transmission"
                    labelPlacement="end"
                    checked={dzdriver['Manual Transmission']}
                    name="Manual Transmission"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Reefers"
                    labelPlacement="end"
                    checked={dzdriver.Reefers}
                    name="Reefers"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Curtain Sides"
                    labelPlacement="end"
                    checked={dzdriver['Curtain Sides']}
                    name="Curtain Sides"
                    onChange={handleDzdriverChange}
                    />
                    {/* <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Drop Deck"
                    labelPlacement="end"
                    /> */}
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Flat Bed"
                    labelPlacement="end"
                    checked={dzdriver['Flat Bed']}
                    name="Flat Bed"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Ropes and Tarps"
                    labelPlacement="end"
                    checked={dzdriver['Ropes and Tarps']}
                    name="Ropes and Tarps"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Boom"
                    labelPlacement="end"
                    checked={dzdriver.Boom}
                    name="Boom"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="HI-AB"
                    labelPlacement="end"
                    checked={dzdriver['HI-AB']}
                    name="HI-AB"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Lumber"
                    labelPlacement="end"
                    checked={dzdriver.Lumber}
                    name="Lumber"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Steel"
                    labelPlacement="end"
                    checked={dzdriver.Steel}
                    name="Steel"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Moffat"
                    labelPlacement="end"
                    checked={dzdriver.Moffat}
                    name="Moffat"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Containers"
                    labelPlacement="end"
                    checked={dzdriver.Containers}
                    name="Containers"
                    onChange={handleDzdriverChange}
                    />
                    {/* <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Super Van"
                    labelPlacement="end"
                    /> */}
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dry Bulk"
                    labelPlacement="end"
                    checked={dzdriver['Dry Bulk']}
                    name="Dry Bulk"
                    onChange={handleDzdriverChange}
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tankers"
                    labelPlacement="end"
                    checked={dzdriver.Tankers}
                    name="Tankers"
                    onChange={handleDzdriverChange}
                    />
                    {/* <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="A Trains"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="B Trains"
                    labelPlacement="end"
                    /> */}
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Tailgate"
                    labelPlacement="end"
                    checked={dzdriver.Tailgate}
                    name="Tailgate"
                    onChange={handleDzdriverChange}
                    />
                    {/* <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Waste"
                    labelPlacement="end"
                    /> */}
                    
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                DZ Driver Experience
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Under 1 year"
                    labelPlacement="end"
                    checked={dzdriverexp['Under 1 year']}
                    name="Under 1 year"
                    onChange={handleDzdriverExpChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Over 1 year"
                    labelPlacement="end"
                    checked={dzdriverexp['Over 1 year']}
                    name="Over 1 year"
                    onChange={handleDzdriverExpChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Over 2 years"
                    labelPlacement="end"
                    checked={dzdriverexp['Over 2 years']}
                    name="Over 2 years"
                    onChange={handleDzdriverExpChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Over 3 years"
                    labelPlacement="end"
                    checked={dzdriverexp['Over 3 years']}
                    name="Over 3 years"
                    onChange={handleDzdriverExpChange}
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Over 5 years"
                    labelPlacement="end"
                    checked={dzdriverexp['Over 5 years']}
                    name="Over 5 years"
                    onChange={handleDzdriverExpChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Over 10 years"
                    labelPlacement="end"
                    checked={dzdriverexp['Over 10 years']}
                    name="Over 10 years"
                    onChange={handleDzdriverExpChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Languages
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="English"
                    labelPlacement="end"
                    checked={language.English}
                    name="English"
                    onChange={handleLanguageChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="French"
                    labelPlacement="end"
                    checked={language.French}
                    name="French"
                    onChange={handleLanguageChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Machine Operator 
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="CNC"
                    labelPlacement="end"
                    checked={machineop.CNC}
                    name="CNC"
                    onChange={handleMachineopChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Lathe"
                    labelPlacement="end"
                    checked={machineop.Lathe}
                    name="Lathe"
                    onChange={handleMachineopChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Punch Press"
                    labelPlacement="end"
                    checked={machineop['Punch Press']}
                    name="Punch Press"
                    onChange={handleMachineopChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Slitter"
                    labelPlacement="end"
                    checked={machineop.Slitter}
                    name="Slitter"
                    onChange={handleMachineopChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Management
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Scheduling"
                    labelPlacement="end"
                    checked={management.Scheduling}
                    name="Scheduling"
                    onChange={handleManagementChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Inventory"
                    labelPlacement="end"
                    checked={management.Inventory}
                    name="Inventory"
                    onChange={handleManagementChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Supervision"
                    labelPlacement="end"
                    checked={management.Supervision}
                    name="Supervision"
                    onChange={handleManagementChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Purchasing/Buying"
                    labelPlacement="end"
                    checked={management['Purchasing/Buying']}
                    name="Purchasing/Buying"
                    onChange={handleManagementChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Manufacturing
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Assembly"
                    labelPlacement="end"
                    checked={manufacturing.Assembly}
                    name="Assembly"
                    onChange={handleManufacturingChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Inspecting/Q.A."
                    labelPlacement="end"
                    checked={manufacturing['Inspecting/Q.A.']}
                    name="Inspecting/Q.A."
                    onChange={handleManufacturingChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Packaging"
                    labelPlacement="end"
                    checked={manufacturing.Packaging}
                    name="Packaging"
                    onChange={handleManufacturingChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Cool Environment"
                    labelPlacement="end"
                    checked={manufacturing['Cool Environment']}
                    name="Cool Environment"
                    onChange={handleManufacturingChange}
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="High-Speed Automation"
                    labelPlacement="end"
                    checked={manufacturing['High-Speed Automation']}
                    name="High-Speed Automation"
                    onChange={handleManufacturingChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Warehouse
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Stocking"
                    labelPlacement="end"
                    checked={warehouse.Stocking}
                    name="Stocking"
                    onChange={handleWarehouseChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Order Picker"
                    labelPlacement="end"
                    checked={warehouse['Order Picker']}
                    name="Order Picker"
                    onChange={handleWarehouseChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Shipping"
                    labelPlacement="end"
                    checked={warehouse.Shipping}
                    name="Shipping"
                    onChange={handleWarehouseChange}
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Receiving"
                    labelPlacement="end"
                    checked={warehouse.Receiving}
                    name="Receiving"
                    onChange={handleWarehouseChange}
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Bills of Landing"
                    labelPlacement="end"
                    checked={warehouse['Biils of Landing']}
                    name="Bills of Landing"
                    onChange={handleWarehouseChange}
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="RF Scanning"
                    labelPlacement="end"
                    checked={warehouse['RF Scanning']}
                    name="RF Scanning"
                    onChange={handleWarehouseChange}
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Welding
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="MIG"
                    labelPlacement="end"
                    checked={welding.MIG}
                    name="MIG"
                    onChange={handleWeldingChange}
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="TIG"
                    labelPlacement="end"
                    checked={welding.TIG}
                    name="TIG"
                    onChange={handleWeldingChange}
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="ARC"
                    labelPlacement="end"
                    checked={welding.ARC}
                    name="ARC"
                    onChange={handleWeldingChange}
                    />
                </FormGroup>
            </FormControl>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h4" fontFamily={"serif"}>
            References
        </Typography>
        <div className='reference'>
            <Typography color={"rgba(71,42,178)"} fontFamily={"sans-serif"}>
                Please list one professional references.
            </Typography>
            <div className='name_rel'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <div className='specs'
                style={{
                    // width:"60%",
                    display:"flex",
                    justifyContent:"flex-start",
                    alignItems:"center"
                }}
                >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Full Name :
                </Typography>
                <TextField
                    sx={{
                        paddingRight:"2vw",
                        width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={fullName}
                    onChange={(e) => handleInputChange(e)}
                    id="fullName"
                    placeholder="Enter Full Name"
                    variant="outlined"
                    margin="normal"
                />
                <Typography sx={{paddingLeft:"5vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Relation ship :
                </Typography>
                <TextField
                    sx={{
                        width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={relationship}
                    onChange={(e) => handleInputChange(e)}
                    id="relationship"
                    variant="outlined"
                    margin="normal"
                />
                </div>
        
            <div className='Comp_Phone'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Company :
                </Typography>
                <TextField
                    sx={{
                        paddingRight:"2vw",
                        width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={companyName}
                    onChange={(e) => handleInputChange(e)}
                    id="companyName"
                    placeholder="Enter Company Name"
                    variant="outlined"
                    margin="normal"
                />
                <Typography sx={{paddingLeft:"5vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Phone :
                </Typography>
                <TextField
                    sx={{
                        width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={companyphone}
                    onChange={(e) => handleInputChange(e)}
                    id="companyphone"
                    placeholder="Enter valid Phone Number"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='email'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Address :
                </Typography>
                <TextField
                    style={{
                        width:"60vw"
                    }}
                    className="form_input"
                    type="text"
                    value={companyaddress}
                    onChange={(e) => handleInputChange(e)}
                    id="companyaddress"
                    placeholder="Enter Full addresss"
                    variant="outlined"
                    margin="normal"
                />
                </div>
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h4" fontFamily={"serif"}>
            Education
        </Typography>
        <div className='education'>
            <div className='edu'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    High School :
                </Typography>
                <TextField
                    sx={{
                        paddingRight:"2vw",
                        width:"25vw"
                    }}
                    className="form_input"
                    type="text"
                    value={highschool}
                    onChange={(e) => handleInputChange(e)}
                    id="highschool"
                    placeholder="Enter High school"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} sx={{paddingLeft:"5vw"}} className="form_label" >
                    Address :
                </Typography>
                <TextField
                    style={{
                        width:"40vw"
                    }}
                    className="form_input"
                    type="text"
                    value={schooladdress}
                    onChange={(e) => handleInputChange(e)}
                    id="schooladdress"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='eduyr'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"}>
                    From :
                </Typography>
                <TextField
                sx={{
                    // marginLeft:"3vw",
                    paddingRight:"2vw",
                    // width:"25vw"
                }}
                    className="form_input_col"
                    type="text"
                    value={fromschool}
                    onChange={(e) => handleInputChange(e)}
                    id="fromschool"
                    placeholder='Enter year'
                    variant="outlined"
                    margin="normal"
                />
                <Typography sx={{paddingLeft:"3vw"}} color={"rgba(71,42,178)"}>
                    To :
                </Typography>
                <TextField
                    sx={{
                        marginLeft:"4.5vw",
                        // width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={toschool}
                    onChange={(e) => handleInputChange(e)}
                    id="toschool"
                    variant="outlined"
                    placeholder='Enter year'
                    margin="normal"
                />
            </div>
            <div className='grad'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography sx={{marginRight:"4vw"}} color={"rgba(71,42,178)"}>
                    Did you graduate?  
                </Typography>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={graduatehs}
                        onChange={(e)=>setGraduatehs(e.target.value)}
                        >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Typography sx={{paddingLeft:"6vw"}} color={"rgba(71,42,178)"}>
                    Degree :
                </Typography>
                <TextField
                    sx={{
                        marginLeft:"3vw",
                    }}
                    className="form_input"
                    type="text"
                    value={degree}
                    onChange={(e) => handleInputChange(e)}
                    id="degree"
                    placeholder="Specify Degree"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='edu1'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    College :
                </Typography>
                <TextField
                    sx={{
                        paddingRight:"2vw",
                        width:"25vw"
                    }}
                    className="form_input_col1"
                    type="text"
                    value={college}
                    onChange={(e) => handleInputChange(e)}
                    id="college"
                    placeholder="Enter College"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} sx={{paddingLeft:"5vw"}} className="form_label" >
                    Address :
                </Typography>
                <TextField
                    style={{
                        width:"40vw"
                    }}
                    className="form_input"
                    type="text"
                    value={collegeaddress}
                    onChange={(e) => handleInputChange(e)}
                    id="collegeaddress"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='eduyr'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"}>
                    From :
                </Typography>
                <TextField
                    sx={{
                        // marginLeft:"6vw",
                        paddingRight:"2vw",
                        // width:"15vw"
                    }}
                    className="form_input_col"
                    type="text"
                    value={fromcollege}
                    onChange={(e) => handleInputChange(e)}
                    id="fromcollege"
                    placeholder='Enter year'
                    variant="outlined"
                    margin="normal"
                />
                <Typography sx={{paddingLeft:"3vw"}} color={"rgba(71,42,178)"}>
                    To :
                </Typography>
                <TextField
                    sx={{
                        marginLeft:"4.5vw",
                    }}
                    className="form_input"
                    type="text"
                    value={tocollege}
                    onChange={(e) => handleInputChange(e)}
                    id="tocollege"
                    placeholder='Enter year'
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='grad'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography sx={{marginRight:"4vw"}} color={"rgba(71,42,178)"}>
                    Did you graduate?  
                </Typography>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={graduate}
                        onChange={(e)=>setGraduate(e.target.value)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Typography sx={{paddingLeft:"6vw"}} color={"rgba(71,42,178)"}>
                    Degree :
                </Typography>
                <TextField
                    sx={{
                        marginLeft:"3vw",
                    }}
                    className="form_input"
                    type="text"
                    value={collegedegree}
                    onChange={(e) => handleInputChange(e)}
                    id="collegedegree"
                    placeholder="Specify Degree"
                    variant="outlined"
                    margin="normal"
                />
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h4" fontFamily={"serif"}>
            Previous Employment
        </Typography>
        <div className='prev_Emp'>
           <div className='eduyr'
            style={{
                // width:"60%",
                display:"inline-flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"}  className="form_label" >
                    Company :
                </Typography>
                <TextField
                    sx={{
                        marginRight:"2vh",
                        width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={prevcompany}
                    onChange={(e) => handleInputChange(e)}
                    id="prevcompany"
                    placeholder="Enter Company Name"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} sx={{marginLeft:"7vw"}} className="form_label" >
                    Phone :
                </Typography>
                <TextField
                    sx={{
                        width:"25vw"
                    }}
                    className="form_input"
                    type="text"
                    value={prevphone}
                    onChange={(e) => handleInputChange(e)}
                    id="prevphone"
                    placeholder="Enter valid Phone Number"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='eduyr'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Address :
                </Typography>
                <TextField
                    sx={{
                        marginRight:"2vh",
                        width:"20vw"
                    }}
                    className="form_input"
                    type="text"
                    value={prevaddress}
                    onChange={(e) => handleInputChange(e)}
                    id="prevaddress"
                    placeholder="Address"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} sx={{marginLeft:"7vw"}} className="form_label" >
                    Supervisor :
                </Typography>
                <TextField
                    sx={{
                        width:"25vw"
                    }}
                    className="form_input"
                    type="text"
                    value={supervisor}
                    onChange={(e) => handleInputChange(e)}
                    id="supervisor"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='Job_Salary'
            style={{
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <div>
                <Typography display={"inline"} color={"rgba(71,42,178)"} className="form_label" >
                    Job Title :
                </Typography>
                <TextField
                    sx={{display:"inline"}}
                    className="form_input"
                    type="text"
                    value={jobtitle}
                    onChange={(e) => handleInputChange(e)}
                    id="jobtitle"
                    placeholder="Enter Profile"
                    variant="outlined"
                    margin="normal"
                />
                </div>
                <div style={{
                    marginTop:"1vh",
                    marginBottom:"1vh"
                }}>
                <Typography display={"inline"} color={"rgba(71,42,178)"} sx={{
                    marginLeft:"1vw"
                }} className="form_label" >
                    Starting Salary :
                </Typography>
                <TextField
                    sx={{display:"inline"}}
                    className="form_input"
                    type="text"
                    value={startsal}
                    onChange={(e) => handleInputChange(e)}
                    id="startsal"
                    variant="outlined"
                    margin="normal"
                />
                </div>
                <div>
                <Typography display={"inline"} color={"rgba(71,42,178)"} sx={{
                    marginLeft:"1vw"
                }} className="form_label" >
                    Ending Salary :
                </Typography>
                <TextField
                    sx={{display:"inline"}}
                    className="form_input"
                    type="text"
                    value={endsal}
                    onChange={(e) => handleInputChange(e)}
                    id="endsal"
                    variant="outlined"
                    margin="normal"
                />
                </div>
                
            </div>
            <div className='email'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} sx={{marginRight:"1vw"}} className="form_label">
                    Responsibilities:
                </Typography>
                <TextField
                    sx={{
                        width:"70vw",
                        // marginLeft:"4vw",
                        // marginRight:"2vw"
                    }}
                    className="form_input"
                    type="text"
                    value={responsibility}
                    id="responsibility"
                    onChange={(e) => handleInputChange(e)}
                    variant="outlined"
                    margin="normal"
                />
                
            </div>
            <div className='Job_Salary'
            style={{
                
                // width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <div >
                <Typography display={"inline"} color={"rgba(71,42,178)"} className="form_label" >
                  Worked From :
                </Typography>
                <TextField
                    sx={{
                        display:"inline"
                    }}
                    className="form_input"
                    type="text"
                    value={fromprev}
                    onChange={(e) => handleInputChange(e)}
                    id="fromprev"
                    variant="outlined"
                    placeholder='Enter year'
                    margin="normal"
                />
                </div>
                <div style={{
                    marginTop:"1vh",
                    marginBottom:"1vh"
                }} >
                <Typography display={"inline"} sx={{marginLeft:"1vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    To :
                </Typography>
                <TextField
                    sx={{
                        display:"inline"
                    }}
                    className="form_input"
                    type="text"
                    value={toprev}
                    onChange={(e) => handleInputChange(e)}
                    id="toprev"
                    placeholder='Enter year'
                    variant="outlined"
                    margin="normal"
                />
                </div>
                <div>
                <Typography display={"inline"} sx={{marginLeft:"1vw"}} color={"rgba(71,42,178)"} className="form_label" >
                    Reason :
                </Typography>
                <TextField
                    sx={{
                        display:"inline"
                    }}
                    // sx={{width:"18vw"}}
                    className="form_input"
                    type="text"
                    value={reason}
                    onChange={(e) => handleInputChange(e)}
                    id="reason"
                    placeholder="Specify reason for leaving"
                    variant="outlined"
                    margin="normal"
                />
                </div>
            </div>
            <Typography color={"rgba(71,42,178)"} className="form_label_end" >
                May we contact your previous supervisor for a reference ? : 
            </Typography>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={agree}
                    onChange={(e)=>setAgree(e.target.value)}
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </div>
        <div className='disclamer'
        >
        <Typography color={"rgba(71,42,178)"} sx={{
            display:"flex",
            justifyContent:"center",
            marginBottom:"1vh",
            // width:"60%",
            alignItems:"center"
        }} fontFamily={"serif"} variant="h5">
            Disclamer
        </Typography>
        <Typography color={"rgba(71,42,178)"} variant='h7' sx={{
            paddingLeft:"2vw",
            // width:"60%",
            paddingRight:"2vw",
            paddingBottom:"2vh"
        }} 
        >
        I hereby certify that the information given on this application form and enclosures to be true and accurate, and grant Fusion Staffing permission to use this information at their discretion. If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release. I acknowledge that will
deduct the cost of any ETR bill fees from my pay. This company is under the Elect to Work Policy.
        </Typography>
        <Button sx={{
            marginLeft:"24%"
        }}
        style={{
            borderColor:"blue",
            marginTop:"3vh"
        }}
        variant="outlined"
        onClick={signUp}
        >
            Submit Application
        </Button>
        </div>
    </div>
  )
}

