import axios from 'axios';
export default axios.create({
    baseURL:' http://localhost:8081'
    // baseURL:'https://8080-abdcffedaacedadccddafbcdeaeaadbdbabf.project.examly.io/users/register'
});