export default [
    {id: 1, name: 'Монитор Acer 23.8" K242HYLBBD', price: 8590,
      image: 'https://w2g.ru/wp-content/uploads/2020/06/485077.jpg',
      category:{
        value:'computers',
        name:'Компьютеры',
        subcategory:{
          value:'monitors',
          name:'Мониторы',
        }
      }, 
      spec: {
        diagonal:{
          title: 'Диагональ экрана',
          value: '23.8'
        },
        resolution: {
          title: 'Разрешение экрана',
          value: '1920x1080'
        },
        frequency: {
          title: 'Частота обновления',
          value: '60Hz'
        },
        matrix: {
          title: 'Технология изготовления матрицы',
          value: 'VA'
        }
      }
    },
    {id: 2, name: 'Монитор HP V27i [9SV94AA]', price: 11999,
      image: 'https://www.kns.ru/linkpics/hp-32-2fw77aa-0-v1.jpg',
      category:{
        value:'computers',
        name:'Компьютеры',
        subcategory:{
          value:'monitors',
          name:'Мониторы',
        }
      }, 
      spec: {
        diagonal:{
          title: 'Диагональ экрана',
          value: '27'
        },
        resolution: {
          title: 'Разрешение экрана',
          value: '1920x1080'
        },
        frequency: {
          title: 'Частота обновления',
          value: '60Hz'
        },
        matrix: {
          title: 'Технология изготовления матрицы',
          value: 'IPS'
        }
      }
    },
    {id: 3, name: 'Процессор AMD Ryzen 5 3600X', price: 17399,
      image: 'https://static.nix.ru/autocatalog/amd/427158_2254_draft.jpg',
      category:{
        value:'computers',
        name:'Компьютеры',
        subcategory:{
          value:'processors',
          name:'Процессоры',
        }
      }, 
      spec: {
        socket :{
          title: 'Сокет',
          value: 'AM4'
        },
        cores: {
          title: 'Количество ядер',
          value: '6'
        },
        threads : {
          title: 'Количество потоков',
          value: '12'
        },
        frequency: {
          title: 'Базовая частота процессора',
          value: '3800 Mhz'
        },
        frequencyMax: {
          title: 'Максимальная частота в турбо режиме',
          value: '4400 Mhz'
        },
      }
    },
    {id: 4, name: 'Процессор Intel Core i7-10700K OEM', price: 29999,
      image: 'https://os-com.ru/images/detailed/876/Screenshot_2_ks8q-bc.png',
      category:{
        value:'computers',
        name:'Компьютеры',
        subcategory:{
          value:'processors',
          name:'Процессоры',
        }
      }, 
      spec: {
        socket :{
          title: 'Сокет',
          value: 'LGA 1200'
        },
        cores: {
          title: 'Количество ядер',
          value: '8'
        },
        threads : {
          title: 'Количество потоков',
          value: '16'
        },
        frequency: {
          title: 'Базовая частота процессора',
          value: '3800 Mhz'
        },
        frequencyMax: {
          title: 'Максимальная частота в турбо режиме',
          value: '5100 Mhz'
        },
        
      }
    },
    {id: 5, name: 'Смартфон realme 6 4/128 ГБ белый', price: 15999,
      image: 'https://gurushops.ru/upload/iblock/6be/6be34cbfb90e187bfffda8ccb83def32.jpg',
      category:{
        value:'gadgets',
        name:'Гаджеты',
        subcategory:{
          value:'smartphones',
          name:'Смартфоны',
        }
      }, 
      spec: {
        diagonal:{
          title: 'Диагональ экрана (дюйм)',
          value: '6.5'
        },
        resolution: {
          title: 'Разрешение экрана',
          value: '2400x1080'
        },
        processor: {
          title: 'Процессор',
          value: 'MediaTek Helio G90T'
        },
        frequency: {
          title: 'Частота процессора',
          value: '2 GHz'
        },
        ram: {
          title: 'Объем оперативной памяти',
          value: '4 Gb'
        },
        BuiltInMemory:{
          title: 'Объем встроенной памяти',
          value: '128 Gb'
        }
      }
    },
  ]