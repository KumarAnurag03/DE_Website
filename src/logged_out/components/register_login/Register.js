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
    const [landmark, setLandmark] = useState(null);
    const [date_avail, setDate_avail] = useState(null);
    const [date_birth, setDate_birth] = useState(null);
    const [date_expire, setDate_expire] = useState(null);
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
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "startsal"){
            setStartsal(value);
        }
        if(id === "endsal"){
            setEndsal(value);
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
        if(id === "address")
        {
            setAddress(value);
        }
        if(id === "landmark")
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
                    firstName,
                    email
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

  return (
    <div>
        <div
        style={{
            marginTop: "13vh"
        }}
        ></div>
        <Typography color={"rgba(71,42,178)"} fontFamily={"serif"} variant="h3">
            Personal Information
        </Typography>
        <div className='personal-form-body'>
            {/* <div className='username'>
                <label className='form_label' for="firstName">Full Name: </label>
                <input className='form_input' type='text' value={firstName} onChange={(e) => handleInputChange(e)} id='firstName' placeholder='First Name'/>
                <input className='form_input' type='text' value={lastName} onChange={(e) => handleInputChange(e)} id='lastName' placeholder='Last Name'/>
            </div> */}
            <div className='name'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Full Name:
                </Typography>
                <TextField
                    required
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
                <TextField
                    className="form_input"
                    type="text"
                    value={lastName}
                    onChange={(e) => handleInputChange(e)}
                    id="lastName"
                    placeholder="Last Name"
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
                <TextField
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
                        width:"70vw"
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
                        width:"70vw"
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
                        width:"70vw"
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
                        width:"70vw"
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
                display:"block",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Phone:
                </Typography>
                
                <TextField
                    className="form_input"
                    type="text"
                    value={phone}
                    onChange={(e) => handleInputChange(e)}
                    id="phone"
                    placeholder="Mobile Number"
                    variant="outlined"
                    margin="normal"
                />
                
            </div>
            <div className='avail_birth'
            // style={{
            //     paddingLeft:"5vw",
            //     display:"inline-flex",
            //     flexDirection:"column"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Availability:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Available from"
                        value={date_avail}
                        id="date_avail"
                        slotProps={{
                        textField: {
                            helperText: 'MM/DD/YYYY',
                        },
                        }}
                    />
                </LocalizationProvider>
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Date of Birth:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="D.O.B."
                        value={date_birth}
                        id="date_birth"
                        slotProps={{
                        textField: {
                            helperText: 'MM/DD/YYYY',
                        },
                        }}
                    />
                </LocalizationProvider>
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h3" fontFamily={"serif"}>
            Truck Driver validation 
        </Typography>
        <div className='validation'>
            
            <div className='license'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    License # :
                </Typography>
                
                <TextField
                    className="form_input"
                    type="text"
                    value={licenseno}
                    onChange={(e) => handleInputChange(e)}
                    id="licenseno"
                    placeholder="License Number"
                    variant="outlined"
                    margin="normal"
                />
                
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Expiry :
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            </LocalizationProvider>
            </div>

            <div className='license'
            style={{
                marginTop:"1vh"
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    License Province :
                </Typography>
                
                <TextField
                    className="form_input"
                    type="text"
                    value={licenseprov}
                    onChange={(e) => handleInputChange(e)}
                    id="licenseprov"
                    placeholder="License Province"
                    variant="outlined"
                    margin="normal"
                />
                
                <Typography color={"rgba(71,42,178)"} className="form_label" >
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
        <Typography color={"rgba(71,42,178)"} variant="h3" fontFamily={"serif"}>
            Work Experience
        </Typography>
        <div style={{
            paddingLeft:"2vw",
            paddingTop:"2vh",
            width:"60%"
        }}
        >
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Available Times
            </Typography>
            <FormControl component="fieldset">
                <FormGroup  aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Monday"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Tuesday"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Wednesday"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Thursday"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Friday"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Saturday"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Sunday"
                    labelPlacement="end"
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
                    label="Smart Serve"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Food Handlers Certificate"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Propane"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Electric"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Cross-Dock"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Clamp"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Raymond Reach"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Reverse Steering"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Single Walkie"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Double Walkie"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="5 Ton"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Cube Van"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Lead Hand"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Painting"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Flagging"
                    labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Hospitality
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Server"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Bar Back"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Bartender"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Wine Steward"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Kitchen Prep"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Cook"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Chef"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dishwasher"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Dish Steward"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Porter"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Houseman"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Hostess"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Doorman"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Banquet Supervisor"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Banquet Attendant"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Laundry Attendant"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Parking Attendant"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Coat Check"
                    labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
            <Typography color={"rgba(71,42,178)"} variant="h5" fontFamily={"serif"}>
                Hospitality Clients
            </Typography>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="monday"
                    control={<Checkbox />}
                    label="Hotel"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Golf Club"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Conference Centre"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Banquets"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="Corporate"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="Fast Food"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Catering Companies"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="sunday"
                    control={<Checkbox />}
                    label="Restaurant"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="French"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Lathe"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Punch Press"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Slitter"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Inventory"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Supervision"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Purchasing / Buying"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Inspecting / Q.A."
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Packaging"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Cool Environment"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="friday"
                    control={<Checkbox />}
                    label="High-Speed Automation"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="Order Picker"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="Shipping"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="thursday"
                    control={<Checkbox />}
                    label="Receiving"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="Bills of Landing"
                    control={<Checkbox />}
                    label="Friday"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="saturday"
                    control={<Checkbox />}
                    label="RF Scanning"
                    labelPlacement="end"
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
                    />
                    <FormControlLabel
                    value="tuesday"
                    control={<Checkbox />}
                    label="TIG"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="wednesday"
                    control={<Checkbox />}
                    label="ARC"
                    labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h3" fontFamily={"serif"}>
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
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Full Name :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={fullName}
                    onChange={(e) => handleInputChange(e)}
                    id="fullName"
                    placeholder="Enter Full Name"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Relationship :
                </Typography>
                <TextField
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
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Company :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={companyName}
                    onChange={(e) => handleInputChange(e)}
                    id="companyName"
                    placeholder="Enter Company Name"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Phone :
                </Typography>
                <TextField
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
                        width:"70vw"
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
        <Typography color={"rgba(71,42,178)"} variant="h3" fontFamily={"serif"}>
            Education
        </Typography>
        <div className='education'>
            <div className='name_rel'
            style={{
                width:"60%",
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
            <div className='specs'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"}>
                    From :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={fromschool}
                    onChange={(e) => handleInputChange(e)}
                    id="fromschool"
                    placeholder='Enter year'
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"}>
                    To :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={toschool}
                    onChange={(e) => handleInputChange(e)}
                    id="toschool"
                    variant="outlined"
                    placeholder='Enter year'
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"}>
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
                <Typography color={"rgba(71,42,178)"}>
                    Degree :
                </Typography>
                <TextField
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
            <div className='name_rel'
            style={{
                width:"60%",
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
                    className="form_input"
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
            <div className='specs'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"}>
                    From :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={fromcollege}
                    onChange={(e) => handleInputChange(e)}
                    id="fromcollege"
                    placeholder='Enter year'
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"}>
                    To :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={tocollege}
                    onChange={(e) => handleInputChange(e)}
                    id="tocollege"
                    placeholder='Enter year'
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"}>
                    Did you graduate?  
                </Typography>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Typography color={"rgba(71,42,178)"}>
                    Degree :
                </Typography>
                <TextField
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
            <div className='name_rel'
            style={{
                width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Other :
                </Typography>
                <TextField
                    sx={{
                        paddingRight:"2vw",
                        width:"25vw"
                    }}
                    className="form_input"
                    type="text"
                    value={other}
                    onChange={(e) => handleInputChange(e)}
                    id="other"
                    placeholder="Others"
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
                    value={otheraddress}
                    onChange={(e) => handleInputChange(e)}
                    id="otheraddress"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='specs'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"}>
                    From :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={fromother}
                    onChange={(e) => handleInputChange(e)}
                    id="fromother"
                    variant="outlined"
                    placeholder='Enter year'
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"}>
                    To :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={toother}
                    onChange={(e) => handleInputChange(e)}
                    id="toother"
                    variant="outlined"
                    placeholder='Enter year'
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"}>
                    Did you graduate?  
                </Typography>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Typography color={"rgba(71,42,178)"}>
                    Degree :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={degreeother}
                    onChange={(e) => handleInputChange(e)}
                    id="degreeother"
                    placeholder="Specify Degree"
                    variant="outlined"
                    margin="normal"
                />
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h3" fontFamily={"serif"}>
            Agency Work Experience
        </Typography>
        <div className='reference'>
            <div className='name_rel'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Agency Name :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={agency}
                    onChange={(e) => handleInputChange(e)}
                    id="agency"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Pay Rate :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={payrate}
                    onChange={(e) => handleInputChange(e)}
                    id="payrate"
                    placeholder="Enter Hourly Rate"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='Comp_Phone'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Company Assigned to :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={companyassigned}
                    onChange={(e) => handleInputChange(e)}
                    id="companyassigned"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Position :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={position}
                    onChange={(e) => handleInputChange(e)}
                    id="position"
                    variant="outlined"
                    margin="normal"
                />
            </div>
        </div>
        <Typography color={"rgba(71,42,178)"} variant="h3" fontFamily={"serif"}>
            Previous Employment
        </Typography>
        <div className='prev_Emp'>
           <div className='Comp_Phone'
            style={{
                width:"60%",
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
            <div className='Add_Sup'
            style={{
                width:"60%",
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
                width:"60%",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Job Title :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={jobtitle}
                    onChange={(e) => handleInputChange(e)}
                    id="jobtitle"
                    placeholder="Enter Profile"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} sx={{
                    marginLeft:"1vw"
                }} className="form_label" >
                    Starting Salary :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={startsal}
                    onChange={(e) => handleInputChange(e)}
                    id="startsal"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} sx={{
                    marginLeft:"1vw"
                }} className="form_label" >
                    Ending Salary :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={endsal}
                    onChange={(e) => handleInputChange(e)}
                    id="endsal"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <div className='specs'
            style={{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center"
            }}
            >
                <Typography color={"rgba(71,42,178)"} sx={{marginRight:"-18vw"}} className="form_label">
                    Responsibilities :
                </Typography>
                <TextField
                    sx={{
                        width:"30vw",
                        marginRight:"2vw"
                    }}
                    className="form_input"
                    type="text"
                    value={responsibility}
                    onChange={(e) => handleInputChange(e)}
                    id="resposibility"
                    variant="outlined"
                    margin="normal"
                />
                
            </div>
            <div className='specs'
            // style={{
            //     display:"flex",
            //     justifyContent:"flex-start",
            //     alignItems:"center"
            // }}
            >
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    From :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={fromprev}
                    onChange={(e) => handleInputChange(e)}
                    id="fromprev"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    To :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={toprev}
                    onChange={(e) => handleInputChange(e)}
                    id="toprev"
                    variant="outlined"
                    margin="normal"
                />
                <Typography color={"rgba(71,42,178)"} className="form_label" >
                    Reason for leaving :
                </Typography>
                <TextField
                    className="form_input"
                    type="text"
                    value={reason}
                    onChange={(e) => handleInputChange(e)}
                    id="reason"
                    placeholder="Specify reason"
                    variant="outlined"
                    margin="normal"
                />
            </div>
            <Typography color={"rgba(71,42,178)"} className="form_label" >
                May we contact your previous supervisor for a reference?: 
            </Typography>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </div>
        <div>
        <Typography color={"rgba(71,42,178)"} sx={{
            display:"flex",
            justifyContent:"center",
            width:"60%",
            alignItems:"center"
        }} fontFamily={"serif"} variant="h4">
            Disclamer
        </Typography>
        <Typography color={"rgba(71,42,178)"} variant='h5' sx={{
            paddingLeft:"2vw",
            width:"60%",
            paddingRight:"2vw",
            paddingBottom:"2vh"
        }} 
        >
        I hereby certify that the information given on this application form and enclosures to be true and accurate, and grant Help Unlimited permission to use this information at their discretion. If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release. I acknowledge that will
deduct the cost of any ETR bill fees from my pay. This company is under the Elect to Work Policy.
        </Typography>
        <Button sx={{
            marginLeft:"24%"
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

