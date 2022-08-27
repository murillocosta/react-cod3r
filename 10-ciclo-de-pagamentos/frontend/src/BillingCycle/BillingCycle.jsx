import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/ContentHeader/ContentHeader';
import Content from '../common/template/Content/Content';
import Tabs from '../common/tab/tabs/Tabs';
import TabsHeader from '../common/tab/tabs/TabsHeader';
import TabsContent from '../common/tab/tabs/TabsContent';
import TabHeader from '../common/tab/tab/tabHeader';
import TabContent from '../common/tab/tab/TabContent';

import { selectTab, showTabs } from '../main/actions/tabActions';
import { create, update, remove } from '../main/actions/billingCyclesActions';

import List from './BillingCycleList';
import Form from './BillingCycleForm';

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate');
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>

            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>

              <TabContent id="tabCreate">
                <Form
                  onSubmit={this.props.create}
                  submitClass="primary"
                  submitLabel="Incluir"
                />
              </TabContent>

              <TabContent id="tabUpdate">
                <Form
                  onSubmit={this.props.update}
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>

              <TabContent id="tabDelete">
                <Form
                  onSubmit={this.props.remove}
                  readOnly={true}
                  submitLabel="Excluir"
                  submitClass="danger"
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
