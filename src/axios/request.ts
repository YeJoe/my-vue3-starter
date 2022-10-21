import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
class Request {
  private instance: AxiosInstance | undefined;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    //请求拦截器
    this.instance.interceptors.request.use((config) => {
      return config;
    }, (error) => {
      console.log(error, "error");
    })
    this.instance.interceptors.response.use((res) => {
      return res.data;
    }, (err) => {
      return err;
    })
  }
  // 相应拦截器
  request<T>(config: AxiosRequestConfig<T>): Promise<T> {
    return new Promise<T>((reslove, reject) => {
      this.instance?.request<any, T>(config)
        .then((res) => {
          reslove(res);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
  // 封装get请求
  get(url: string, data: any) {
    return new Promise((resolve, reject) => {
      this.instance?.get(url,{
        params:data
      })
        .then((res) => {
          resolve(res);
        }).catch(error => {
          reject(error.data);
        })
    })
  }
  // 封装post请求
  post(url: string,data:any) {
    return new Promise((reslove, reject) => {
      this.instance?.post(url,{
        data:data
      }).then(res => {
        reslove(res);
      }).catch(err => {
        reject(err.data);
      })
    })
  }
  


}
export default Request;
