import { Component } from 'react';
import { requestGetImages } from 'services/api';
import { Section } from './Section/Section';
import { ImageGallery } from './ImageGallerys/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
    state = {
        searchTerm: '',
        images: [],
        currentPage: 1,
        totalPages: 0,
        isLoading: false,
        modal: { isOpen: false, modalData: null },
    };

    componentDidUpdate(_, prevState) {
        if (
            prevState.currentPage !== this.state.currentPage ||
            prevState.searchTerm !== this.state.searchTerm
        ) {
            this.getImages(this.state.searchTerm, this.state.currentPage);
        }
    }

    getImages = async (value, page) => {
        this.setState({ isLoading: true });
        try {
            const resp = await requestGetImages(value, page);
            if (!resp.hits.length) {
                Notify.warning('No images found');
                return;
            }
            if (page === 1) {
                this.setState(() => ({
                    images: resp.hits,
                    totalPages: Math.ceil(resp.totalHits / 12),
                }));
            } else {
                this.setState(prevState => ({
                    images: [...prevState.images, ...resp.hits],
                }));
            }
        } catch (error) {
            console.log(error);
            Notify.failure(`Someting wrong</br>${error}`, {
                plainText: false,
            });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    onGetNewImages = async e => {
        e.preventDefault();
        this.setState({ currentPage: 1, searchTerm: e.target.search.value });
    };

    loadMore = async () => {
        if (this.state.currentPage < this.state.totalPages) {
            this.setState(prevState => ({
                currentPage: prevState.currentPage + 1,
            }));
        }
    };

    openModal = data => {
        this.setState({
            modal: { isOpen: true, modalData: data },
        });
    };

    closeModal = () => {
        this.setState({ modal: { isOpen: false, modalData: null } });
    };

    render() {
        const { images, currentPage, totalPages, isLoading, modal } =
            this.state;
        return (
            <>
                <Searchbar onGetNewImages={this.onGetNewImages} />
                {isLoading && <Loader />}
                {!!images.length && (
                    <Section>
                        <ImageGallery
                            images={images}
                            onModalClick={this.openModal}
                        />
                        {modal.isOpen && (
                            <Modal
                                onClose={this.closeModal}
                                modalData={modal.modalData}
                            />
                        )}
                        {totalPages > 1 && currentPage < totalPages && (
                            <Button onClick={this.loadMore}>Load more</Button>
                        )}
                    </Section>
                )}
            </>
        );
    }
}
