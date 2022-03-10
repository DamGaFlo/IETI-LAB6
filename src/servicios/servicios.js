const url = "http://localhost:8080/v1/";

const login2 = async (userDto) => {
     const response = await fetch(url + "auth", {
          method: "POST",
          body: JSON.stringify(userDto),
          headers: {
               "Content-type": "application/json; charset=UTF-8",
          },
     });
     if (response.status === 404) {
          return null;
     }
     const json = await response.json();
     return json;
};

const getById = async (id) => {
     const res = await fetch(url + "user/" + id);
     const user = await res.json();
     console.log(user);
};

const login = async (userDto) => {
     let email = "user";
     let password = "1234";
     if (email === userDto.email && password === userDto.password) {
          return { fecha: "hoy", token: "tokenazo" };
     }
     return null;
};
export const servicios = {
     login,
     getById,
};
