import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '16px',
  backgroundColor: '#fff', // Light gray background color
};

const cardStyles = {
  width: '100%',
  maxWidth: '48rem',
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
};

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
};

const titleStyles = {
  fontSize: '24px',
  fontWeight: '600',
};

const contentStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '16px',
};

const labelStyles = {
  display: 'block',
  fontSize: '14px',
  marginBottom: '4px',
  color: '#4a5568',
};

const inputStyles = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #cbd5e0',
  borderRadius: '4px',
  marginBottom: '8px',
};

const uploadAreaStyles = {
  display: 'flex',
  gap: '16px',
};

const uploadBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px',
  height: '80px',
  border: '1px dashed #cbd5e0',
  borderRadius: '4px',
  backgroundColor: '#edf2f7',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const uploadBoxHoverStyles = {
  backgroundColor: '#e2e8f0',
};

const uploadBoxTextStyles = {
  fontSize: '12px',
  color: '#718096',
  marginTop: '4px',
  textAlign: 'center',
};

const footerStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
  marginTop: '16px',
};

const btnStyles = {
  padding: '8px 16px',
  fontSize: '16px',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const btnCancelStyles = {
  backgroundColor: '#edf2f7',
  color: '#4a5568',
};

const btnCancelHoverStyles = {
  backgroundColor: '#e2e8f0',
};

const btnSaveStyles = {
  backgroundColor: '#6b46c1',
  color: 'white',
};

const btnSaveHoverStyles = {
  backgroundColor: '#553c9a',
};

const FormComponent = () => {
  return (
    <>
    <Navbar />
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar />
    <div style={containerStyles}>
      <div style={cardStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Add Sub Category</h2>
        </div>
        <div style={contentStyles}>
          <div>
            <label htmlFor="category" style={labelStyles}>Category</label>
            <select id="category" style={inputStyles}>
              <option value="ghee-oil">Ghee & Oil</option>
              <option value="tea">Tea</option>
            </select>
          </div>
          <div>
            <label htmlFor="sub-category-name" style={labelStyles}>Sub category name</label>
            <input id="sub-category-name" type="text" placeholder="Enter Sub Category Name" style={inputStyles} />
          </div>
          <div>
            <label htmlFor="sub-category-sequence" style={labelStyles}>Sub Category Sequence</label>
            <input id="sub-category-sequence" type="number" placeholder="Enter Sequence" style={inputStyles} />
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <label style={labelStyles}>Upload Image</label>
            <div style={uploadAreaStyles}>
              <div style={{ ...uploadBoxStyles, ...uploadBoxHoverStyles }}>+</div>
              <div style={{ ...uploadBoxStyles, ...uploadBoxHoverStyles }}>
                +<p style={uploadBoxTextStyles}>Upload Maximum allowed file size is 10MB</p>
              </div>
            </div>
          </div>
        </div>
        <div style={footerStyles}>
          <button style={{ ...btnStyles, ...btnCancelStyles, ...btnCancelHoverStyles }}>Cancel</button>
          <button style={{ ...btnStyles, ...btnSaveStyles, ...btnSaveHoverStyles }}>Save</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default FormComponent;
