import React from 'react';
import {
    Card,
    Stack,
    Button,
    Collapsible,
    AppProvider,
    Page
  } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {useState, useCallback} from 'react';
import CampForm from '../CampForm/CampForm';
  import "./App_provider.css"
function App_provider(props) {
    const [open, setOpen] = useState(false);
    var but1="Create Campaigns";
    var but2="Campaigns";
    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    return (
        <div>
            <AppProvider i18n={enTranslations}>
            <Page>
                
                <Card sectioned  className="AppProvider">
                <Stack vertical>
                <Stack horizontal>
                <h1 className='card_h1'>Campaigns</h1>
                  <div  className={open?but2:but1}>
                    <Button 
                    onClick={handleToggle}
                    ariaExpanded={open}
                    ariaControls="basic-collapsible"

                  >{open?but2:but1}</Button> 
                  </div>
                </Stack>
                  <Collapsible
              open={open}
              id="basic-collapsible"
              transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
              expandOnPrint
            >
                <CampForm/>
            </Collapsible>
            </Stack>
                </Card>
                
            </Page>
            </AppProvider>
            
        </div>
    );
}

export default App_provider;