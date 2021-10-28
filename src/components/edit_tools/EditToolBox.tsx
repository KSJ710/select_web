import React, { useContext } from 'react';
import Background from 'src/components/edit_tools/Background';
import { EditContext } from 'src/pages/template';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const editVar: EditVar = useContext(EditContext);
  const bgDisplay: classDisplay = 'hidden';
  const hundleToggleBgDisplay = () => {
    if (bgDisplay == 'hidden') {
    }
  };
  return (
    <div className={`${editVar.display} ${styles.editToolBox}`}>
      <div>背景</div>
      <div>効果</div>
      <div>枠線</div>
      <Background />
    </div>
  );
};

export default EditToolBox;
