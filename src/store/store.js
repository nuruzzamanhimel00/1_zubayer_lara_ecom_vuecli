  //vuex install
  import Vue from 'vue';
  import Vuex from 'vuex';
  import axios from 'axios';

  Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        auth:[],
       
    },
    getters:{
        // getAllCategorGetters(state){
        //     return state.categories;
        // },
        getAuthVisaAccesstoken(state){
            return state.auth;
        }
        
       
    },
    mutations: {
        // getAllCategoryMutation(state,data){
        //    return state.categories = data;
        // },
        passignThenAccessTokenMutation(state,data){
            state.auth = data;
            // console.log(data);
        }
      
    },
    actions: {
        // getAllCategoryAction(context){
        //     axios.get('/get-all-category')
        //     .then((reflection)=>{
        //         context.commit('getAllCategoryMutation',reflection.data.category);
        //         // console.log(reflection.data);
        //     }).catch((error)=>{
        //         alert('server errors');
        //     });
        // },

        passignThenAccessTokenAction(context,access_token){

         

            axios.post('/auth-user', {
                accessToken: access_token,
            })
            .then(function (response) {
                if(response.data.status == "success"){

                    context.commit('passignThenAccessTokenMutation',response.data.data);
                    // console.log(response.data.data);
                }
                // console.log(response.data.data.name);
            })
            .catch(function (error) {
                console.log(error);
            });

            // console.log(access_token);
        }
       
    }
  })