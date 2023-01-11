import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "./components/Modal";
export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <header>
        헤더입니다
        <React.Fragment>
          <button onClick={openModal}>모달팝업창 시험</button>
          <Modal open={modalOpen} close={closeModal} header="모달 헤더부분">
            모달 팝업 시험 구현창
          </Modal>
        </React.Fragment>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
