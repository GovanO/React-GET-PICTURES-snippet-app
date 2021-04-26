import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID VR60TfslWpU421Mx0TdNADf6hZ1X0SU6_bmRJmmSF9A'
  }
});