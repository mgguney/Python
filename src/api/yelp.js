import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        'Bearer acCJ-bAN190HCvm9PN4S_nbteweVwx-eVATAs2haUF-a-M8zyDnw5hs047cAGAS4B1NtBViAcMb-F6WflgSC3DqgSDS4eKTkFYdpiIsx708GNeGNxEZFqzbmBMZKYXYx'
    }
});