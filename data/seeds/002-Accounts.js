
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, 
          name: "Car",
          value: 350.00 , 
          type: "exspense" ,
          user_id: 1,
        },
        {id: 2, 
          name: "Light" ,
          value: 100.00 , 
          type: "exspense",
          user_id: 1,
        },
        {id: 3, 
          name: "Cable",
          value: 75.00 , 
          type: "exspense",
          user_id: 1,
        },
        {id: 4, 
          name: "Insurance" ,
          value: 187.00, 
          type: "exspense" ,
          user_id: 1 ,
        },
        {id: 5, 
          name: "Claudia" ,
          value: 1500.00 , 
          type: "income",
          user_id: 1,
        },
        {id: 6, 
          name: "Joe" ,
          value: 6700.00, 
          type: "income" ,
          user_id: 1 ,
        }
 
      ]);
    });
};


