ขั้นตอนการติดตั้งเเละใช้งาน React-Native
เครื่องมือที่จำเป็นในการใช้งาน
        - Chocolatey (for Windows), Brew (for OSX)
        - Node.js
        -Yarn
        - Git
        - expo CLI
        - Visual Studio Code
        - Android Studio
        
ติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)
    
        >> choco install nodejs
        >> choco install yarn
        >> choco install git
        
ในการติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)

        >> yarn global add expo-cli
        
สร้างโครงร่างโปรเจ็คสำหรับการพัฒนา React Native ด้วย expo (ให้เลือก template เป็น blank)
        >> expo init wt-app
        >> cd wt-app
        
ทำการรันโปรแกรมโปรแกรมขึ้นมา แล้วใช้สมาร์ทโฟนรันโปรแกรม expo แล้วสั่งสแกน QR Code ที่ได้จากคำสั่ง yarn start
        >> yarn start
       
การใช้ Navigation Library ซึ่งไลบรารีที่ถือเป็น Official จาก React คือ react-navigation
        >> expo install react-native-gesture-handler react-native-reanimated react-native-screens 
        react-native-safe-area-context @react-native-community/masked-view
        
        >> yarn add @react-navigation/stack @react-navigation/native
        
        
    


        
