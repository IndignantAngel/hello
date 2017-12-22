import RNStorage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

export default class Storage {

    static init() {
        global.storage = new RNStorage({
            size: 1000,                         // 1000 maximum size
            storageBackend: AsyncStorage,       // ansync storage backend
            defaultExpires: null,               // never expire
            enableCache: true,
            sync: null,
        });
    }

    static put(key, data, expires = null) {
        const typeString = Object.prototype.toString.call(key)
        if(typeString !== '[object String]')
        {
            const errorString = 'key, with a type of ' + typeString + ', is not a type of [object String]';
            throw new Error(errorString);
        }
            
        return global.storage.save({
            key, data, expires
        });
    }

    static get(key) {
        const typeString = Object.prototype.toString.call(key)
        if(typeString !== '[object String]')
        {
            const errorString = 'key, with a type of ' + typeString + ', is not a type of [object String]';
            throw new Error(errorString);
        }

        return global.storage.load({key});
    }
}